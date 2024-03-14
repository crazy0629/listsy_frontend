import { MultiSelection, SingleSelection } from "@/components";
import React, { useEffect, useRef, useState } from "react";
import { FilterWrapper } from "../../main.styles";
import { selectData } from "@/modules/upload/detailsform/DataList/data-pets";
import axios from "axios";
import { SERVER_URI } from "@/config";

type Props = {
  onChange: (data: any) => void;
  itemCategory: string;
  page: string;
};

export const PetFilter: React.FC<Props> = ({
  onChange,
  itemCategory,
  page,
}) => {
  const [filter, setFilter] = useState({
    SearchWithin: "",
    petType: "",
    dogs: {
      breed: [] as string[],
      age: [] as string[],
      gender: [] as string[],
      vaccinations: [] as string[],
      sellerRating: [] as string[],
    },
    cats: {
      breed: [] as string[],
      age: [] as string[],
      gender: [] as string[],
      vaccinations: [] as string[],
      sellerRating: [] as string[],
    },
    birds: {
      breed: [] as string[],
      age: [] as string[],
      gender: [] as string[],
      sellerRating: [] as string[],
    },
    fish: {
      species: [] as string[],
      tankSize: [] as string[],
      careLevel: [] as string[],
      diet: [] as string[],
      sellerRating: [] as string[],
    },
    reptiles: {
      species: [] as string[],
      age: [] as string[],
      gender: [] as string[],
      size: [] as string[],
      sellerRating: [] as string[],
    },
    rabbits: {
      breed: [] as string[],
      age: [] as string[],
      gender: [] as string[],
      vaccinations: [] as string[],
      sellerRating: [] as string[],
    },
    rodents: {
      species: [] as string[],
      age: [] as string[],
      gender: [] as string[],
      sellerRating: [] as string[],
    },
    livestock: {
      type: [] as string[],
      age: [] as string[],
      gender: [] as string[],
      sellerRating: [] as string[],
    },
    horses: {
      breed: [] as string[],
      age: [] as string[],
      gender: [] as string[],
      trainingLevel: [] as string[],
      vaccinations: [] as string[],
      healthCertification: [] as string[],
      hoofCare: [] as string[],
      insurance: [] as string[],
      sellerRating: [] as string[],
    },
    amphibian: {
      species: [] as string[],
      age: [] as string[],
      gender: [] as string[],
      sellerRating: [] as string[],
    },
    centerLocationSelected: false,
    selectedLocation: null,
  });

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [address, setAddress] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [adCnt, setAdCnt] = useState(null);
  const [currency, setCurrency] = useState("$");
  const [isLoading, setIsLoading] = useState(false);
  const typingTimer = useRef(null);
  const [priceChanged, setPriceChanged] = useState(false);

  const donetyping = () => {};

  useEffect(() => {
    if (filter.centerLocationSelected == false) return;
    donetyping();
  }, [filter.centerLocationSelected, filter.selectedLocation]);

  useEffect(() => {
    window.addEventListener("localStorageChanged", function (e: Event) {
      getLocationInfo();
    });
    getLocationInfo();
    getCountryCode(
      Number(localStorage.getItem("centerlat")),
      Number(localStorage.getItem("centerlng"))
    );
  }, []);

  useEffect(() => {
    donetyping();

    let filterObj = {
      SearchWithin: filter.SearchWithin,
      petType: filter.petType,
      centerLocationSelected: filter.centerLocationSelected,
      selectedLocation: filter.selectedLocation,
    };
    if (filter.petType == "Dogs") {
      filterObj = {
        ...filterObj,
        ...filter.dogs,
      };
    } else if (filter.petType == "Cats") {
      filterObj = {
        ...filterObj,
        ...filter.cats,
      };
    } else if (filter.petType == "Birds") {
      filterObj = {
        ...filterObj,
        ...filter.birds,
      };
    } else if (filter.petType == "Fish") {
      filterObj = {
        ...filterObj,
        ...filter.fish,
      };
    } else if (filter.petType == "Reptile") {
      filterObj = {
        ...filterObj,
        ...filter.reptiles,
      };
    } else if (filter.petType == "Rabbits") {
      filterObj = {
        ...filterObj,
        ...filter.rabbits,
      };
    } else if (filter.petType == "Rodents") {
      filterObj = {
        ...filterObj,
        ...filter.rodents,
      };
    } else if (filter.petType == "Livestock") {
      filterObj = {
        ...filterObj,
        ...filter.livestock,
      };
    } else if (filter.petType == "Horses") {
      filterObj = {
        ...filterObj,
        ...filter.horses,
      };
    } else if (filter.petType == "Amphibian") {
      filterObj = {
        ...filterObj,
        ...filter.amphibian,
      };
    }
    onChange(filterObj);
  }, [filter]);

  useEffect(() => {
    if (adCnt == null) return;
    setIsLoading(false);
  }, [adCnt]);

  useEffect(() => {
    if (priceChanged == false) return;
    typingTimer.current = setTimeout(() => {
      donetyping();
      onChange({ minPrice, maxPrice });
    }, 500);
    return () => {
      clearTimeout(typingTimer.current);
    };
  }, [minPrice, maxPrice]);

  const getLocationInfo = () => {
    let locationSelected = localStorage.getItem("locationSelected");
    if (locationSelected == "true") {
      let locationAddress = localStorage.getItem("locationAddress");
      setAddress(locationAddress);
      setCountryCode("");
    } else if (locationSelected == "false") {
      let locationAddress = localStorage.getItem("locationAddress");
      let countryCode = localStorage.getItem("locationCountryCode");
      setAddress(locationAddress);
      setCountryCode(countryCode);
    }
  };

  useEffect(() => {
    if (address == "") return;
    setIsLoading(true);
    donetyping();
  }, [address, countryCode]);

  const getCountryCode = (lat, lng) => {
    return fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        const country = data.results.find((result) => {
          return result.types.includes("country");
        });
        const cCode = country
          ? country.address_components.find((component) =>
              component.types.includes("country")
            ).short_name
          : null;

        setFilter((prev) => ({
          ...prev,
          selectedLocation: {
            address: localStorage.getItem("locationAddress"),
            lat: Number(localStorage.getItem("centerlat")),
            lng: Number(localStorage.getItem("centerlng")),
            countryCode: cCode,
          },
        }));

        setFilter((prev) => ({ ...prev, centerLocationSelected: true }));

        fetch(`https://restcountries.com/v3.1/alpha/${cCode}`)
          .then((response) => response.json())
          .then((countryData) => {
            let currencySymbol = "";

            for (const key in countryData[0].currencies) {
              if (countryData[0].currencies.hasOwnProperty(key)) {
                currencySymbol = countryData[0].currencies[key].symbol;
                break;
              }
            }
            setCurrency(currencySymbol);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching country code:", error);
        return null;
      });
  };
  const handleMinPrice = async (e) => {
    if (maxPrice != "" && Number(e.target.value) > Number(maxPrice)) return;
    setMinPrice(e.target.value);
    setPriceChanged(true);
  };

  const handleMaxPrice = async (e) => {
    setMaxPrice(e.target.value);
    setPriceChanged(true);
  };

  const validateNumberInput = (e) => {
    const regex = /^[0-9]*$/;
    if (!regex.test(e.target.value)) {
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
    }
  };

  return (
    <FilterWrapper>
      {
        <>
          <SingleSelection
            data={selectData.pet.Petsforsale.SearchWithin}
            placeholder="Nationwide"
            value={filter.SearchWithin}
            onChange={(value) =>
              setFilter((prev) => ({ ...prev, SearchWithin: value }))
            }
            type="itemSearchRange"
            countList={adCnt?.itemRangeInfo}
          />
          <SingleSelection
            data={selectData.pet.Petsforsale.Type}
            placeholder="Select Pet Type"
            value={filter.petType}
            onChange={(value) =>
              setFilter((prev) => ({ ...prev, petType: value }))
            }
            type="petType"
            countList={adCnt?.petType}
          />
          {filter.petType == "Dogs" && (
            <>
              <div>
                <span>{currency}</span>
                <input
                  type="text"
                  placeholder="min price"
                  value={minPrice}
                  onChange={handleMinPrice}
                  onInput={validateNumberInput}
                />
                <span>-</span>
                <span>{currency}</span>
                <input
                  type="text"
                  placeholder="max price"
                  value={maxPrice}
                  onChange={handleMaxPrice}
                  onInput={validateNumberInput}
                />
                {adCnt?.itemPriceRange != -1 && (
                  <span>({adCnt?.itemPriceRange})</span>
                )}
              </div>
            </>
          )}
        </>
      }
    </FilterWrapper>
  );
};
