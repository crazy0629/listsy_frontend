import React, { useState, useEffect } from "react";
import * as Styled from "./location.styles";
import { toast } from "react-toastify";

import {
  //   GoogleMap,
  useLoadScript,
  //   Marker,
  Libraries,
} from "@react-google-maps/api";
import axios from "axios";
import { SERVER_URI } from "@/config";
import dynamic from "next/dynamic";

const GooglePlacesAutocomplete = dynamic(
  () => import("react-google-places-autocomplete"),
  { ssr: false }
);

const GoogleMap = dynamic(
  () => import("@react-google-maps/api").then((m) => m.GoogleMap),
  { ssr: false }
);

const MarkerF = dynamic(
  () => import("@react-google-maps/api").then((m) => m.MarkerF),
  { ssr: false }
);

type Props = {
  open: boolean;
  onChoose: (address: string, countryFlag: string) => void;
};

const libraries: Libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

export const LocationModal: React.FC<Props> = ({ open, onChoose }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
    libraries,
  });
  const [filterAddress, setFilterAddress] = useState("Please choose location");
  const [adCityList, setAdCityList] = useState([]);
  const [flagUrl, setFlagUrl] = useState("");
  const [locationInfo, setLocationInfo] = useState(null);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [tempflag, setTempflag] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTempflag(false);
    }, 400);
    getLocationList();
    setFilterAddress(localStorage.getItem("locationAddress"));
    setFlagUrl(localStorage.getItem("flagUrl"));
  }, []);

  useEffect(() => {
    setCenter({
      lat: Number(localStorage.getItem("centerlat")), // default latitude
      lng: Number(localStorage.getItem("centerlng")), // default longitude
    });
  }, [open]);

  const getLocationList = async () => {
    const result = await axios.post(`${SERVER_URI}/ad/getLocationList`);
    setAdCityList(result.data.data);
  };

  const handleClose = () => {
    if (filterAddress == null) {
      toast.error("Please select location");
      return;
    }
    onChoose(filterAddress, flagUrl);
  };

  const getCountryFlag = (countryCode) => {
    return fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
      .then((response) => response.json())
      .then((data) => {
        return data[0].flags.png;
      })
      .catch((error) => {
        console.error("Error fetching country flag:", error);
        return null;
      });
  };

  const getLocationInfo = async () => {
    await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?place_id=${locationInfo.value.place_id}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        const countryCode = data.results[0].address_components.find(
          (component) => component.types.includes("country")
        ).short_name;
        localStorage.setItem("locationCountryCode", countryCode);
        const location = data.results[0].geometry.location;
        const lat = location.lat;
        const lng = location.lng;
        localStorage.setItem("centerlat", lat);
        localStorage.setItem("centerlng", lng);
        setCenter({ lat, lng });
        setFilterAddress(locationInfo.label);
        getCountryFlag(countryCode).then((countryFlag) => {
          if (countryFlag) {
            setFlagUrl(countryFlag);
          } else {
            console.error("Country flag not found");
          }
        });
      })
      .catch((error) => {
        console.error("Error fetching location info:", error);
      });
  };

  useEffect(() => {
    console.log(locationInfo);
    if (locationInfo == null) return;
    getLocationInfo();
  }, [locationInfo]);

  const handleSearch = (value: any) => {
    setLocationInfo(value);
  };

  return (
    <Styled.LocationModalWrapper className={open ? "open" : ""}>
      <Styled.LocationModalContainer>
        <Styled.LocationModalHeader>
          {/* <h3>{filterAddress}</h3> */}
          <div className="location_selector">
            <GooglePlacesAutocomplete
              apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}
              selectProps={{
                placeholder: "Enter Your Location",
                value: locationInfo,
                onChange: handleSearch,
              }}
            />
          </div>
          <div className="btn_group">
            <button
              className="select_btn"
              onClick={() => {
                handleClose();
              }}
            >
              Apply
            </button>
          </div>
        </Styled.LocationModalHeader>
        <Styled.LocationModalBody>
          {loadError && <div>Error loading maps</div>}
          {!isLoaded && <div>Loading maps</div>}
          {isLoaded && !tempflag && (
            // <div style={{ height: "100%", width: "100%" }}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={10}
              center={center}
            >
              {adCityList.map((city, index) => {
                return (
                  <MarkerF
                    key={index}
                    position={{
                      lat: Number(city.lat),
                      lng: Number(city.lng),
                    }}
                    label={{
                      text: `${city.count.toString()}`,
                      color: "black",
                    }}
                    // onClick={() => handleMarkerClick(city)}
                  />
                );
              })}
            </GoogleMap>
            // </div>
          )}
        </Styled.LocationModalBody>
      </Styled.LocationModalContainer>
      <Styled.LocationModalOverlay onClick={handleClose} />
    </Styled.LocationModalWrapper>
  );
};
