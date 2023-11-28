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

type Props = {
  open: boolean;
  onClose: () => void;
  onChoose: (address: string, countryFlag: string) => void;
};

const libraries: Libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 51.509865, // default latitude
  lng: -0.118092, // default longitude
};

export const LocationModal: React.FC<Props> = ({ open, onClose, onChoose }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "",
    libraries,
  });
  const [filterAddress, setFilterAddress] = useState("Please choose location");
  const [adCityList, setAdCityList] = useState([]);
  const [flagUrl, setFlagUrl] = useState("");

  useEffect(() => {
    getLocationList();
  }, []);

  const getLocationList = async () => {
    const result = await axios.post(`${SERVER_URI}/ad/getLocationList`);
    setAdCityList(result.data.data);
  };

  const handleChoose = () => {
    if (filterAddress == null) {
      toast.error("Please select location");
      return;
    }
    onChoose(filterAddress, flagUrl);
  };

  const handleClose = () => {
    onClose();
  };

  const getCountryCode = (lat, lng) => {
    return fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=`
    )
      .then((response) => response.json())
      .then((data) => {
        const country = data.results.find((result) => {
          return result.types.includes("country");
        });
        return country
          ? country.address_components.find((component) =>
              component.types.includes("country")
            ).short_name
          : null;
      })
      .catch((error) => {
        console.error("Error fetching country code:", error);
        return null;
      });
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

  const handleMarkerClick = (city: any) => {
    setFilterAddress(city.address);
    getCountryCode(city.lat, city.lng)
      .then((countryCode) => {
        if (countryCode) {
          return getCountryFlag(countryCode);
        } else {
          console.error("Country code not found");
          return null;
        }
      })
      .then((countryFlag) => {
        if (countryFlag) {
          setFlagUrl(countryFlag);
        } else {
          console.error("Country flag not found");
        }
      });
  };

  return (
    <Styled.LocationModalWrapper className={open ? "open" : ""}>
      <Styled.LocationModalContainer>
        <Styled.LocationModalHeader>
          <h3>{filterAddress}</h3>
          <div className="btn_group">
            <button
              className="select_btn"
              onClick={() => {
                handleChoose();
              }}
            >
              Select
            </button>
            <button
              className="cancel_btn"
              onClick={() => {
                handleClose();
              }}
            >
              Cancel
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
                      onClick={() => handleMarkerClick(city)}
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
