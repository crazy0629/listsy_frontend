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

export const LocationModal: React.FC<Props> = ({ open, onClose, onChoose }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "",
    libraries,
  });
  const [clickedAddress, setClickedAddress] = useState(null);
  const [filterAddress, setFilterAddress] = useState("Please choose location");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [adCityList, setAdCityList] = useState([]);

  useEffect(() => {
    getLocationList();
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
    onChoose(lat, lng, filterAddress);
  };

  const handleClose = () => {
    onClose();
  };
  const handleMarkerClick = (city: any) => {
    setFilterAddress(city.address);
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
