import React, { useState, useEffect } from "react";
import * as Styled from "./location.styles";
import { MdClose } from "react-icons/md";
import { SingleSelection } from "@/components";
import { toast } from "react-toastify";

let Country = require("country-state-city").Country;
let State = require("country-state-city").State;
let City = require("country-state-city").City;

type Props = {
  open: boolean;
  onClose: () => void;
  onChoose: (
    worldWide: boolean,
    selectedCountry: string,
    selectedState: string,
    selectedCity: string
  ) => void;
};

export const LocationModal: React.FC<Props> = ({ open, onClose, onChoose }) => {
  const countryList = Country.getAllCountries();
  const stateList = State.getAllStates();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedStateLists, setSelectedStateLists] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCityList, setSelectedCityList] = useState([]);
  const [worldWide, setWorldWide] = useState(true);

  useEffect(() => {
    const isoCode = countryList.filter(
      (item) => item.name == selectedCountry
    )[0]?.isoCode;
    setSelectedStateLists(
      stateList.filter((item) => item.countryCode == isoCode)
    );
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState == "") return;
    const countryISOCode = countryList.filter(
      (item) => item.name == selectedCountry
    )[0]?.isoCode;
    const stateCode = selectedStateLists.filter(
      (item) => item.name == selectedState
    )[0]?.isoCode;
    const cityList = City.getCitiesOfCountry(countryISOCode);
    setSelectedCityList(cityList.filter((item) => item.stateCode == stateCode));
  }, [selectedState]);

  const handleClose = () => {
    onClose();
  };

  const handleChoose = () => {
    if (!worldWide && selectedCountry == "") {
      toast.error("Please choose correct location!");
      return;
    }
    onChoose(worldWide, selectedCountry, selectedState, selectedCity);
  };

  return (
    <Styled.LocationModalWrapper className={open ? "open" : ""}>
      <Styled.LocationModalContainer>
        <Styled.LocationModalHeader>
          <h3>Please choose location</h3>
          <MdClose
            size={20}
            color="#AFAFAF"
            onClick={() => {
              handleClose();
            }}
          />
        </Styled.LocationModalHeader>
        <Styled.LocationModalBody>
          <div>
            <SingleSelection
              data={countryList.map((item) => {
                return item.name;
              })}
              label="Country"
              placeholder="Select Country"
              value={selectedCountry}
              onChange={(value) => {
                setSelectedCountry(value);
                setSelectedState("");
                setSelectedCity("");
              }}
            />
          </div>
          <div>
            <SingleSelection
              data={selectedStateLists.map((item) => {
                return item.name;
              })}
              label="State"
              placeholder="Select State"
              value={selectedState}
              onChange={(value) => {
                setSelectedState(value);
                setSelectedCity("");
              }}
            />
          </div>
          <div>
            <SingleSelection
              data={selectedCityList.map((item) => {
                return item.name;
              })}
              label="City"
              placeholder="Select City"
              value={selectedCity}
              onChange={(value) => setSelectedCity(value)}
            />
          </div>
          <div>
            <input
              type="checkbox"
              name="share"
              id="share"
              checked={worldWide}
              onChange={() => {
                setWorldWide((prev) => !prev);
              }}
            />
            <span>worldwide</span>
          </div>
          <div>
            <Styled.ButtonGroup>
              <button
                className="choose_btn"
                onClick={() => {
                  handleChoose();
                }}
              >
                Choose
              </button>
              <button
                className="cancel_btn"
                onClick={() => {
                  handleClose();
                }}
              >
                Cancel
              </button>
            </Styled.ButtonGroup>
          </div>
        </Styled.LocationModalBody>
      </Styled.LocationModalContainer>
      <Styled.LocationModalOverlay onClick={handleClose} />
    </Styled.LocationModalWrapper>
  );
};
