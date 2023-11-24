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
  flag: string;
  onClose: () => void;
  onChoose: (lat: number, lng: number, address: string) => void;
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

export const LocationModal: React.FC<Props> = ({
  open,
  flag,
  onClose,
  onChoose,
}) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "",
    libraries,
  });
  const [clickedAddress, setClickedAddress] = useState(null);
  const [address, setAddress] = useState("Please choose location");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [adCityList, setAdCityList] = useState([]);

  useEffect(() => {
    if (flag == "filter") {
      getLocationList();
    }
  }, []);

  const getLocationList = async () => {
    const result = await axios.post(`${SERVER_URI}/ad/getLocationList`);
    setAdCityList(result.data.data);
  };
  const handleChoose = () => {
    if (clickedAddress == null) {
      toast.error("Please select location");
      return;
    }
    onChoose(lat, lng, address);
  };

  const handleClose = () => {
    onClose();
  };

  const handleSelectLocation = (e) => {
    setLat(e.latLng.lat());
    setLng(e.latLng.lng());
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${e.latLng.lat()},${e.latLng.lng()}&key=`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          const addressComponents = data.results[0].address_components;
          const country = addressComponents.find((component) =>
            component.types.includes("country")
          );
          const state = addressComponents.find((component) =>
            component.types.includes("administrative_area_level_1")
          );
          const city = addressComponents.find((component) =>
            component.types.includes("locality")
          );
          let newAddress = "";
          if (city != undefined) {
            (newAddress = city.long_name), (newAddress += ", ");
          }
          if (state != undefined) {
            (newAddress += state.long_name), (newAddress += ", ");
          }
          if (country != undefined) {
            newAddress += country.long_name;
          }
          setAddress(newAddress);
          setClickedAddress({
            country: country?.long_name,
            state: state?.long_name,
            city: city?.long_name,
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching address information:", error);
      });
  };
  const handleMarkerClick = (city: any) => {
    console.log(123, city);
  };

  return (
    <Styled.LocationModalWrapper className={open ? "open" : ""}>
      <Styled.LocationModalContainer>
        <Styled.LocationModalHeader>
          <h3>{address}</h3>
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
          {isLoaded && flag == "upload" && (
            <div>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}
                onClick={(e) => {
                  handleSelectLocation(e);
                }}
              >
                {clickedAddress && <Marker position={{ lat, lng }} />}
              </GoogleMap>
            </div>
          )}

          {isLoaded && flag == "filter" && (
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
