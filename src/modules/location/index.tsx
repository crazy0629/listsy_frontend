import React, { useState, useEffect } from "react";
import * as Styled from "./location.styles";
import { toast } from "react-toastify";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  Libraries,
} from "@react-google-maps/api";
import axios from "axios";
import { SERVER_URI } from "@/config";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

type Props = {
  open: boolean;
  onChoose: (address: string, countryFlag: string) => void;
};

const libraries: Libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
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

  const center = {
    lat: Number(localStorage.getItem("centerlat")), // default latitude
    lng: Number(localStorage.getItem("centerlng")), // default longitude
  };

  useEffect(() => {
    getLocationList();
    setFlagUrl(localStorage.getItem("flagUrl"));
    setFilterAddress(localStorage.getItem("locationAddress"));
  }, []);

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

  useEffect(() => {
    if (locationInfo == null) return;

    fetch(
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
  }, [locationInfo]);

  return (
    <Styled.LocationModalWrapper className={open ? "open" : ""}>
      <Styled.LocationModalContainer>
        <Styled.LocationModalHeader>
          {/* <h3>{filterAddress}</h3> */}
          <div className="location_selector">
            <GooglePlacesAutocomplete
              apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}
              selectProps={{
                placeholder: filterAddress,
                value: locationInfo,
                onChange: setLocationInfo,
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
              OK
            </button>
          </div>
        </Styled.LocationModalHeader>
        <Styled.LocationModalBody>
          {loadError && <div>Error loading maps</div>}
          {!isLoaded && <div>Loading maps</div>}
          {isLoaded && (
            <div>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}
              >
                {adCityList.map((city, index) => {
                  return (
                    <Marker
                      key={index}
                      position={{ lat: city.lat, lng: city.lng }}
                      label={city.address}
                      // onClick={() => handleMarkerClick(city)}
                    />
                  );
                })}
              </GoogleMap>
            </div>
          )}
        </Styled.LocationModalBody>
      </Styled.LocationModalContainer>
      <Styled.LocationModalOverlay onClick={handleClose} />
    </Styled.LocationModalWrapper>
  );
};
