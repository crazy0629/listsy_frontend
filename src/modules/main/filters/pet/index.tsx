import { InputRange, MultiSelection, SingleSelection } from "@/components";
import React, { useEffect, useRef, useState } from "react";
import {
  FilterOptionWrapper,
  FilterWrapper,
  ShowAdvancedFilter,
} from "../../main.styles";
import { selectData } from "@/modules/upload/detailsform/DataList/data-pets";
import axios from "axios";
import { SERVER_URI } from "@/config";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const [filter, setFilter] = useState({
    SearchWithin: "",
    subCategory: "",
    Dogs: {
      breed: [] as string[],
      age: [] as string[],
      gender: [] as string[],
      vaccinations: [] as string[],
      sellerRating: [] as string[],
    },
    Cats: {
      breed: [] as string[],
      age: [] as string[],
      gender: [] as string[],
      vaccinations: [] as string[],
      sellerRating: [] as string[],
    },
    Birds: {
      breed: [] as string[],
      age: [] as string[],
      gender: [] as string[],
      sellerRating: [] as string[],
    },
    Fish: {
      species: [] as string[],
      tankSize: [] as string[],
      careLevel: [] as string[],
      diet: [] as string[],
      sellerRating: [] as string[],
    },
    Reptiles: {
      species: [] as string[],
      age: [] as string[],
      gender: [] as string[],
      size: [] as string[],
      sellerRating: [] as string[],
    },
    Rabbits: {
      breed: [] as string[],
      age: [] as string[],
      gender: [] as string[],
      vaccinations: [] as string[],
      sellerRating: [] as string[],
    },
    Rodents: {
      species: [] as string[],
      age: [] as string[],
      gender: [] as string[],
      sellerRating: [] as string[],
    },
    Livestock: {
      type: [] as string[],
      age: [] as string[],
      gender: [] as string[],
      sellerRating: [] as string[],
    },
    Horses: {
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
    Amphibian: {
      species: [] as string[],
      age: [] as string[],
      gender: [] as string[],
      sellerRating: [] as string[],
    },
    supplies: {
      type: [] as string[],
      sellerRating: [] as string[],
    },
    centerLocationSelected: false,
    selectedLocation: null,
  });
  const [isAdvancedFilter, setIsAdvancedFilter] = useState(false);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [address, setAddress] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [adCnt, setAdCnt] = useState(null);
  const [currency, setCurrency] = useState("$");
  const [isLoading, setIsLoading] = useState(false);
  const typingTimer = useRef(null);
  const [priceChanged, setPriceChanged] = useState(false);

  const donetyping = async () => {
    setIsLoading(true);
    const adsCountData = await axios.post(
      `${SERVER_URI}/pet/getCountOfEachFilter`,
      {
        minPrice: minPrice,
        maxPrice: maxPrice,
        itemCategory,
        itemSellerRating: selectData.filters,
        itemSubCategory: selectData.category[itemCategory],
        itemGender: selectData.filters[itemCategory.toLowerCase()]?.gender,
        itemAge: selectData.filters[itemCategory.toLowerCase()]?.age,
        itemBreed: selectData.filters[itemCategory.toLowerCase()]?.breed,
        itemVaccinations:
          selectData.filters[itemCategory.toLowerCase()]?.vaccinations,
        itemSpecies: selectData.filters[itemCategory.toLowerCase()]?.species,
        itemTankSize: selectData.filters[itemCategory.toLowerCase()]?.tankSize,
        itemCareLevel:
          selectData.filters[itemCategory.toLowerCase()]?.careLevel,
        itemDiet: selectData.filters[itemCategory.toLowerCase()]?.diet,
        itemSize: selectData.filters[itemCategory.toLowerCase()]?.size,
        itemTrainingLevel:
          selectData.filters[itemCategory.toLowerCase()]?.trainingLevel,
        itemHealth: selectData.filters[itemCategory.toLowerCase()]?.health,
        itemHoofCare: selectData.filters[itemCategory.toLowerCase()]?.hoofCare,
        itemInsurance:
          selectData.filters[itemCategory.toLowerCase()]?.insurance,

        itemSearchRange: [-1, 0, 1, 5, 15, 30, 50, 100, 200],
        address,
        countryCode,
        selectedLocation: filter.selectedLocation,
        centerLocationAvailable: filter.centerLocationSelected,
        filter,
      }
    );

    console.log(1234, adsCountData.data);

    setAdCnt(adsCountData.data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (router.query.SearchWithin) {
      setFilter((prev) => ({
        ...prev,
        SearchWithin: router.query.SearchWithin.toString(),
      }));
    }
    if (router.query.subCategory) {
      setFilter((prev) => ({
        ...prev,
        subCategory: router.query.subCategory.toString(),
      }));
    }
    if (router.query.age) {
      setFilter((prev) => ({
        ...prev,
        [router.query.subCategory.toString()]: {
          ...prev[router.query.subCategory.toString()],
          age: router.query.age.toString().split("%"),
        },
      }));
    }
    if (router.query.gender) {
      setFilter((prev) => ({
        ...prev,
        [router.query.subCategory.toString()]: {
          ...prev[router.query.subCategory.toString()],
          gender: router.query.gender.toString().split("%"),
        },
      }));
    }
    if (router.query.vaccinations) {
      setFilter((prev) => ({
        ...prev,
        [router.query.subCategory.toString()]: {
          ...prev[router.query.subCategory.toString()],
          vaccinations: router.query.vaccinations.toString().split("%"),
        },
      }));
    }
    if (router.query.breed) {
      setFilter((prev) => ({
        ...prev,
        [router.query.subCategory.toString()]: {
          ...prev[router.query.subCategory.toString()],
          breed: router.query.breed.toString().split("%"),
        },
      }));
    }

    if (router.query.species) {
      setFilter((prev) => ({
        ...prev,
        [router.query.subCategory.toString()]: {
          ...prev[router.query.subCategory.toString()],
          species: router.query.species.toString().split("%"),
        },
      }));
    }
    if (router.query.tankSize) {
      setFilter((prev) => ({
        ...prev,
        [router.query.subCategory.toString()]: {
          ...prev[router.query.subCategory.toString()],
          tankSize: router.query.tankSize.toString().split("%"),
        },
      }));
    }
    if (router.query.careLevel) {
      setFilter((prev) => ({
        ...prev,
        [router.query.subCategory.toString()]: {
          ...prev[router.query.subCategory.toString()],
          careLevel: router.query.careLevel.toString().split("%"),
        },
      }));
    }
    if (router.query.diet) {
      setFilter((prev) => ({
        ...prev,
        [router.query.subCategory.toString()]: {
          ...prev[router.query.subCategory.toString()],
          diet: router.query.diet.toString().split("%"),
        },
      }));
    }
    if (router.query.size) {
      setFilter((prev) => ({
        ...prev,
        [router.query.subCategory.toString()]: {
          ...prev[router.query.subCategory.toString()],
          size: router.query.size.toString().split("%"),
        },
      }));
    }
    if (router.query.trainingLevel) {
      setFilter((prev) => ({
        ...prev,
        [router.query.subCategory.toString()]: {
          ...prev[router.query.subCategory.toString()],
          trainingLevel: router.query.trainingLevel.toString().split("%"),
        },
      }));
    }
    if (router.query.healthCertification) {
      setFilter((prev) => ({
        ...prev,
        [router.query.subCategory.toString()]: {
          ...prev[router.query.subCategory.toString()],
          healthCertification: router.query.healthCertification
            .toString()
            .split("%"),
        },
      }));
    }
    if (router.query.hoofCare) {
      setFilter((prev) => ({
        ...prev,
        [router.query.subCategory.toString()]: {
          ...prev[router.query.subCategory.toString()],
          hoofCare: router.query.hoofCare.toString().split("%"),
        },
      }));
    }
    if (router.query.insurance) {
      setFilter((prev) => ({
        ...prev,
        [router.query.subCategory.toString()]: {
          ...prev[router.query.subCategory.toString()],
          insurance: router.query.insurance.toString().split("%"),
        },
      }));
    }
    if (router.query.type) {
      if (itemCategory === "Pet Supplies") {
        setFilter((prev) => ({
          ...prev,
          supplies: {
            ...prev.supplies,
            type: router.query.type.toString().split("%"),
          },
        }));
      } else {
        setFilter((prev) => ({
          ...prev,
          [router.query.subCategory.toString()]: {
            ...prev[router.query.subCategory.toString()],
            type: router.query.type.toString().split("%"),
          },
        }));
      }
    }

    if (router.query.sellerRating) {
      setFilter((prev) => ({
        ...prev,
        [router.query.subCategory.toString()]: {
          ...prev[router.query.subCategory.toString()],
          sellerRating: router.query.sellerRating.toString().split("%"),
        },
      }));
    }

    if (router.query.minPrice) {
      setMinPrice(router.query.minPrice.toString());
    }
    if (router.query.maxPrice) {
      setMaxPrice(router.query.maxPrice.toString());
    }
  }, [router.query]);

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
      subCategory: filter.subCategory,
      centerLocationSelected: filter.centerLocationSelected,
      selectedLocation: filter.selectedLocation,
    };
    if (filter.subCategory == "Dogs") {
      filterObj = {
        ...filterObj,
        ...filter.Dogs,
      };
    } else if (filter.subCategory == "Cats") {
      filterObj = {
        ...filterObj,
        ...filter.Cats,
      };
    } else if (filter.subCategory == "Birds") {
      filterObj = {
        ...filterObj,
        ...filter.Birds,
      };
    } else if (filter.subCategory == "Fish") {
      filterObj = {
        ...filterObj,
        ...filter.Fish,
      };
    } else if (filter.subCategory == "Reptile") {
      filterObj = {
        ...filterObj,
        ...filter.Reptiles,
      };
    } else if (filter.subCategory == "Rabbits") {
      filterObj = {
        ...filterObj,
        ...filter.Rabbits,
      };
    } else if (filter.subCategory == "Rodents") {
      filterObj = {
        ...filterObj,
        ...filter.Rodents,
      };
    } else if (filter.subCategory == "Livestock") {
      filterObj = {
        ...filterObj,
        ...filter.Livestock,
      };
    } else if (filter.subCategory == "Horses") {
      filterObj = {
        ...filterObj,
        ...filter.Horses,
      };
    } else if (filter.subCategory == "Amphibian") {
      filterObj = {
        ...filterObj,
        ...filter.Amphibian,
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

  useEffect(() => {
    if (priceChanged == false) return;
    typingTimer.current = setTimeout(() => {
      donetyping();
      onChange({ minPrice, maxPrice });
      setRouterPath({ ...filter }, minPrice, maxPrice);
    }, 500);

    return () => {
      clearTimeout(typingTimer.current);
    };
  }, [minPrice, maxPrice]);

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

  const setRouterPath = (data: any, minPrice: string, maxPrice: string) => {
    const queryPath: any = {};
    if (data.SearchWithin !== "") {
      queryPath.SearchWithin = data.SearchWithin;
    }
    if (data.subCategory !== "") {
      queryPath.subCategory = data.subCategory;
    }
    if (data.Dogs?.breed.length > 0) {
      queryPath.breed = data.Dogs?.breed.join("%");
    }
    if (data.Dogs?.age.length > 0) {
      queryPath.age = data.Dogs?.age.join("%");
    }
    if (data.Dogs?.gender.length > 0) {
      queryPath.gender = data.Dogs?.gender.join("%");
    }
    if (data.Dogs?.sellerRating.length > 0) {
      queryPath.sellerRating = data.Dogs?.sellerRating.join("%");
    }
    if (data.Dogs?.vaccinations.length > 0) {
      queryPath.vaccinations = data.Dogs?.vaccinations.join("%");
    }

    if (data.Cats?.breed.length > 0) {
      queryPath.breed = data.Cats?.breed.join("%");
    }
    if (data.Cats?.age.length > 0) {
      queryPath.age = data.Cats?.age.join("%");
    }
    if (data.Cats?.gender.length > 0) {
      queryPath.gender = data.Cats?.gender.join("%");
    }
    if (data.Cats?.sellerRating.length > 0) {
      queryPath.sellerRating = data.Cats?.sellerRating.join("%");
    }
    if (data.Cats?.vaccinations.length > 0) {
      queryPath.vaccinations = data.Cats?.vaccinations.join("%");
    }

    if (data.Birds?.breed.length > 0) {
      queryPath.breed = data.Birds?.breed.join("%");
    }
    if (data.Birds?.age.length > 0) {
      queryPath.age = data.Birds?.age.join("%");
    }
    if (data.Birds?.gender.length > 0) {
      queryPath.gender = data.Birds?.gender.join("%");
    }
    if (data.Birds?.sellerRating.length > 0) {
      queryPath.sellerRating = data.Birds?.sellerRating.join("%");
    }

    if (data.Fish?.species.length > 0) {
      queryPath.species = data.Fish?.species.join("%");
    }
    if (data.Fish?.tankSize.length > 0) {
      queryPath.tankSize = data.Fish?.tankSize.join("%");
    }
    if (data.Fish?.careLevel.length > 0) {
      queryPath.careLevel = data.Fish?.careLevel.join("%");
    }
    if (data.Fish?.diet.length > 0) {
      queryPath.diet = data.Fish?.diet.join("%");
    }
    if (data.Fish?.sellerRating.length > 0) {
      queryPath.sellerRating = data.Fish?.sellerRating.join("%");
    }

    if (data.Reptiles?.species.length > 0) {
      queryPath.species = data.Reptiles?.species.join("%");
    }
    if (data.Reptiles?.age.length > 0) {
      queryPath.age = data.Reptiles?.age.join("%");
    }
    if (data.Reptiles?.gender.length > 0) {
      queryPath.gender = data.Reptiles?.gender.join("%");
    }
    if (data.Reptiles?.size.length > 0) {
      queryPath.size = data.Reptiles?.size.join("%");
    }
    if (data.Reptiles?.sellerRating.length > 0) {
      queryPath.sellerRating = data.Reptiles?.sellerRating.join("%");
    }

    if (data.Rabbits?.breed.length > 0) {
      queryPath.breed = data.Rabbits?.breed.join("%");
    }
    if (data.Rabbits?.age.length > 0) {
      queryPath.age = data.Rabbits?.age.join("%");
    }
    if (data.Rabbits?.gender.length > 0) {
      queryPath.gender = data.Rabbits?.gender.join("%");
    }
    if (data.Rabbits?.sellerRating.length > 0) {
      queryPath.sellerRating = data.Rabbits?.sellerRating.join("%");
    }
    if (data.Rabbits?.vaccinations.length > 0) {
      queryPath.vaccinations = data.Rabbits?.vaccinations.join("%");
    }

    if (data.Rodents?.species.length > 0) {
      queryPath.species = data.Rodents?.species.join("%");
    }
    if (data.Rodents?.age.length > 0) {
      queryPath.age = data.Rodents?.age.join("%");
    }
    if (data.Rodents?.gender.length > 0) {
      queryPath.gender = data.Rodents?.gender.join("%");
    }
    if (data.Rodents?.sellerRating.length > 0) {
      queryPath.sellerRating = data.Rodents?.sellerRating.join("%");
    }

    if (data.Livestock?.type.length > 0) {
      queryPath.type = data.Livestock?.type.join("%");
    }
    if (data.Livestock?.age.length > 0) {
      queryPath.age = data.Livestock?.age.join("%");
    }
    if (data.Livestock?.gender.length > 0) {
      queryPath.gender = data.Livestock?.gender.join("%");
    }
    if (data.Livestock?.sellerRating.length > 0) {
      queryPath.sellerRating = data.Livestock?.sellerRating.join("%");
    }

    if (data.Horses?.breed.length > 0) {
      queryPath.breed = data.Horses?.breed.join("%");
    }
    if (data.Horses?.age.length > 0) {
      queryPath.age = data.Horses?.age.join("%");
    }
    if (data.Horses?.gender.length > 0) {
      queryPath.gender = data.Horses?.gender.join("%");
    }
    if (data.Horses?.trainingLevel.length > 0) {
      queryPath.trainingLevel = data.Horses?.trainingLevel.join("%");
    }
    if (data.Horses?.vaccinations.length > 0) {
      queryPath.vaccinations = data.Horses?.vaccinations.join("%");
    }
    if (data.Horses?.healthCertification.length > 0) {
      queryPath.healthCertification =
        data.Horses?.healthCertification.join("%");
    }
    if (data.Horses?.hoofCare.length > 0) {
      queryPath.hoofCare = data.Horses?.hoofCare.join("%");
    }
    if (data.Horses?.insurance.length > 0) {
      queryPath.insurance = data.Horses?.insurance.join("%");
    }
    if (data.Horses?.sellerRating.length > 0) {
      queryPath.sellerRating = data.Horses?.sellerRating.join("%");
    }

    if (data.Amphibian?.species.length > 0) {
      queryPath.species = data.Amphibian?.species.join("%");
    }
    if (data.Amphibian?.age.length > 0) {
      queryPath.age = data.Amphibian?.age.join("%");
    }
    if (data.Amphibian?.gender.length > 0) {
      queryPath.gender = data.Amphibian?.gender.join("%");
    }
    if (data.Amphibian?.sellerRating.length > 0) {
      queryPath.sellerRating = data.Amphibian?.sellerRating.join("%");
    }

    if (data.supplies?.type.length > 0) {
      queryPath.type = data.supplies?.type.join("%");
    }
    if (data.supplies?.sellerRating.length > 0) {
      queryPath.sellerRating = data.supplies?.sellerRating.join("%");
    }

    if (maxPrice !== "") {
      queryPath.maxPrice = maxPrice;
    }
    if (minPrice !== "") {
      queryPath.minPrice = minPrice;
    }
    router.push({
      pathname: page,
      query: queryPath,
    });
  };

  const handleFilterSelect = async (data) => {
    setRouterPath(data, minPrice, maxPrice);
  };

  return (
    // adCnt != null && (
    <>
      <FilterOptionWrapper>Main Filter</FilterOptionWrapper>
      <SingleSelection
        data={selectData.filters.SearchWithin}
        placeholder="Nationwide"
        value={filter.SearchWithin}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, SearchWithin: value }))
        }
        type="itemSearchRange"
        countList={adCnt?.itemRangeInfo}
      />
      <InputRange
        value1={minPrice}
        value2={maxPrice}
        placeholder1="Min price"
        placeholder2="Max price"
        type1="number"
        type2="number"
        onChange1={handleMinPrice}
        onChange2={handleMaxPrice}
        prefix1={currency}
        prefix2={currency}
        suffix={0}
        // suffix={adCnt.itemPriceRange != -1 ? adCnt.itemPriceRange : 0}
      />
      <SingleSelection
        data={selectData.subCategory[itemCategory]}
        placeholder="Select Subcategory"
        value={filter.subCategory}
        onChange={(value) => {
          setFilter((prev) => ({
            ...prev,
            subCategory: value,
            Dogs: {
              breed: [],
              age: [],
              gender: [],
              vaccinations: [],
              sellerRating: [],
            },
            Cats: {
              breed: [],
              age: [],
              gender: [],
              vaccinations: [],
              sellerRating: [],
            },
            Birds: {
              breed: [],
              age: [],
              gender: [],
              sellerRating: [],
            },
            Fish: {
              species: [],
              tankSize: [],
              careLevel: [],
              diet: [],
              sellerRating: [],
            },
            Reptiles: {
              species: [],
              age: [],
              gender: [],
              size: [],
              sellerRating: [],
            },
            Rabbits: {
              breed: [],
              age: [],
              gender: [],
              vaccinations: [],
              sellerRating: [],
            },
            Rodents: {
              species: [],
              age: [],
              gender: [],
              sellerRating: [],
            },
            Livestock: {
              type: [],
              age: [],
              gender: [],
              sellerRating: [],
            },
            Horses: {
              breed: [],
              age: [],
              gender: [],
              trainingLevel: [],
              vaccinations: [],
              healthCertification: [],
              hoofCare: [],
              insurance: [],
              sellerRating: [],
            },
            Amphibian: {
              species: [],
              age: [],
              gender: [],
              sellerRating: [],
            },
          }));
          handleFilterSelect({
            ...filter,
            subCategory: value,
            Dogs: {
              breed: [],
              age: [],
              gender: [],
              vaccinations: [],
              sellerRating: [],
            },
            Cats: {
              breed: [],
              age: [],
              gender: [],
              vaccinations: [],
              sellerRating: [],
            },
            Birds: {
              breed: [],
              age: [],
              gender: [],
              sellerRating: [],
            },
            Fish: {
              species: [],
              tankSize: [],
              careLevel: [],
              diet: [],
              sellerRating: [],
            },
            Reptiles: {
              species: [],
              age: [],
              gender: [],
              size: [],
              sellerRating: [],
            },
            Rabbits: {
              breed: [],
              age: [],
              gender: [],
              vaccinations: [],
              sellerRating: [],
            },
            Rodents: {
              species: [],
              age: [],
              gender: [],
              sellerRating: [],
            },
            Livestock: {
              type: [],
              age: [],
              gender: [],
              sellerRating: [],
            },
            Horses: {
              breed: [],
              age: [],
              gender: [],
              trainingLevel: [],
              vaccinations: [],
              healthCertification: [],
              hoofCare: [],
              insurance: [],
              sellerRating: [],
            },
            Amphibian: {
              species: [],
              age: [],
              gender: [],
              sellerRating: [],
            },
          });
        }}
        type="subCategory"
        countList={adCnt?.subCategory}
      />
      {filter.subCategory == "Dogs" && (
        <>
          <MultiSelection
            data={selectData.filters.dogs.age}
            placeholder="Select Age*"
            value={filter.Dogs.age}
            onChange={(value) => {
              setFilter((prev) => ({
                ...prev,
                Dogs: { ...prev.Dogs, age: value },
              }));
              handleFilterSelect({
                ...filter,
                Dogs: { ...filter.Dogs, age: value },
              });
            }}
            type="age"
            countList={adCnt?.age}
          />
          <MultiSelection
            data={selectData.filters.dogs.gender}
            placeholder="Select Gender*"
            value={filter.Dogs.gender}
            onChange={(value) => {
              setFilter((prev) => ({
                ...prev,
                Dogs: { ...prev.Dogs, gender: value },
              }));
              handleFilterSelect({
                ...filter,
                Dogs: { ...filter.Dogs, gender: value },
              });
            }}
            type="gender"
            countList={adCnt?.gender}
          />
          <MultiSelection
            data={selectData.filters.dogs.vaccinations}
            placeholder="Select Vaccinations*"
            value={filter.Dogs.vaccinations}
            onChange={(value) => {
              setFilter((prev) => ({
                ...prev,
                Dogs: { ...prev.Dogs, vaccinations: value },
              }));
              handleFilterSelect({
                ...filter,
                Dogs: { ...filter.Dogs, vaccinations: value },
              });
            }}
            type="vaccinations"
            countList={adCnt?.vaccinations}
          />
          {isAdvancedFilter && (
            <>
              <FilterOptionWrapper>Advanced Filter</FilterOptionWrapper>
              <MultiSelection
                data={selectData.filters.dogs.breed}
                placeholder="Select Breed"
                value={filter.Dogs.breed}
                onChange={(value) => {
                  setFilter((prev) => ({
                    ...prev,
                    Dogs: { ...prev.Dogs, breed: value },
                  }));
                  handleFilterSelect({
                    ...filter,
                    Dogs: { ...filter.Dogs, breed: value },
                  });
                }}
                type="breed"
                countList={adCnt?.breed}
              />
              <MultiSelection
                data={selectData.filters.SellerRating}
                placeholder="Select Seller Rating"
                value={filter.Dogs.sellerRating}
                onChange={(value) => {
                  setFilter((prev) => ({
                    ...prev,
                    Dogs: { ...prev.Dogs, sellerRating: value },
                  }));
                  handleFilterSelect({
                    ...filter,
                    Dogs: { ...filter.Dogs, sellerRating: value },
                  });
                }}
                type="itemSellerRating"
                countList={adCnt?.itemSellerRating}
              />
            </>
          )}
          <ShowAdvancedFilter
            onClick={() => setIsAdvancedFilter((prev) => !prev)}
          >
            {isAdvancedFilter ? "Hide" : "Show"} Advanced Filter
          </ShowAdvancedFilter>
        </>
      )}
      {filter.subCategory == "Cats" && (
        <>
          <MultiSelection
            data={selectData.filters.cats.age}
            placeholder="Select Age*"
            value={filter.Cats.age}
            onChange={(value) => {
              setFilter((prev) => ({
                ...prev,
                Cats: { ...prev.Cats, age: value },
              }));
              handleFilterSelect({
                ...filter,
                Cats: { ...filter.Cats, age: value },
              });
            }}
            type="age"
            countList={adCnt?.age}
          />
          <MultiSelection
            data={selectData.filters.cats.gender}
            placeholder="Select Gender*"
            value={filter.Cats.gender}
            onChange={(value) => {
              setFilter((prev) => ({
                ...prev,
                Cats: { ...prev.Cats, gender: value },
              }));
              handleFilterSelect({
                ...filter,
                Cats: { ...filter.Cats, gender: value },
              });
            }}
            type="gender"
            countList={adCnt?.gender}
          />
          <MultiSelection
            data={selectData.filters.cats.vaccinations}
            placeholder="Select Vaccinations*"
            value={filter.Cats.vaccinations}
            onChange={(value) => {
              setFilter((prev) => ({
                ...prev,
                Cats: { ...prev.Cats, vaccinations: value },
              }));
              handleFilterSelect({
                ...filter,
                Cats: { ...filter.Cats, vaccinations: value },
              });
            }}
            type="vaccinations"
            countList={adCnt?.vaccinations}
          />
          {isAdvancedFilter && (
            <>
              <FilterOptionWrapper>Advanced Filter</FilterOptionWrapper>
              <MultiSelection
                data={selectData.filters.cats.breed}
                placeholder="Select Breed"
                value={filter.Cats.breed}
                onChange={(value) => {
                  setFilter((prev) => ({
                    ...prev,
                    Cats: { ...prev.Cats, breed: value },
                  }));
                  handleFilterSelect({
                    ...filter,
                    Cats: { ...filter.Cats, breed: value },
                  });
                }}
                type="breed"
                countList={adCnt?.breed}
              />
              <MultiSelection
                data={selectData.filters.SellerRating}
                placeholder="Select Seller Rating"
                value={filter.Cats.sellerRating}
                onChange={(value) => {
                  setFilter((prev) => ({
                    ...prev,
                    Cats: { ...prev.Cats, sellerRating: value },
                  }));
                  handleFilterSelect({
                    ...filter,
                    Cats: { ...filter.Cats, sellerRating: value },
                  });
                }}
                type="itemSellerRating"
                countList={adCnt?.itemSellerRating}
              />
            </>
          )}
          <ShowAdvancedFilter
            onClick={() => setIsAdvancedFilter((prev) => !prev)}
          >
            {isAdvancedFilter ? "Hide" : "Show"} Advanced Filter
          </ShowAdvancedFilter>
        </>
      )}
      {filter.subCategory == "Birds" && (
        <>
          <MultiSelection
            data={selectData.filters.birds.age}
            placeholder="Select Age*"
            value={filter.Birds.age}
            onChange={(value) => {
              setFilter((prev) => ({
                ...prev,
                Birds: { ...prev.Birds, age: value },
              }));
              handleFilterSelect({
                ...filter,
                Birds: { ...filter.Birds, age: value },
              });
            }}
            type="age"
            countList={adCnt?.age}
          />
          <MultiSelection
            data={selectData.filters.birds.gender}
            placeholder="Select Gender*"
            value={filter.Birds.gender}
            onChange={(value) => {
              setFilter((prev) => ({
                ...prev,
                Birds: { ...prev.Birds, gender: value },
              }));
              handleFilterSelect({
                ...filter,
                Birds: { ...filter.Birds, gender: value },
              });
            }}
            type="gender"
            countList={adCnt?.gender}
          />

          {isAdvancedFilter && (
            <>
              <FilterOptionWrapper>Advanced Filter</FilterOptionWrapper>
              <MultiSelection
                data={selectData.filters.birds.breed}
                placeholder="Select Breed"
                value={filter.Birds.breed}
                onChange={(value) => {
                  setFilter((prev) => ({
                    ...prev,
                    Birds: { ...prev.Birds, breed: value },
                  }));
                  handleFilterSelect({
                    ...filter,
                    Birds: { ...filter.Birds, breed: value },
                  });
                }}
                type="breed"
                countList={adCnt?.breed}
              />
              <MultiSelection
                data={selectData.filters.SellerRating}
                placeholder="Select Seller Rating"
                value={filter.Birds.sellerRating}
                onChange={(value) => {
                  setFilter((prev) => ({
                    ...prev,
                    Birds: { ...prev.Birds, sellerRating: value },
                  }));
                  handleFilterSelect({
                    ...filter,
                    Birds: { ...filter.Birds, sellerRating: value },
                  });
                }}
                type="itemSellerRating"
                countList={adCnt?.itemSellerRating}
              />
            </>
          )}
          <ShowAdvancedFilter
            onClick={() => setIsAdvancedFilter((prev) => !prev)}
          >
            {isAdvancedFilter ? "Hide" : "Show"} Advanced Filter
          </ShowAdvancedFilter>
        </>
      )}
      {filter.subCategory == "Fish" && (
        <>
          <MultiSelection
            data={selectData.filters.fish.tankSize}
            placeholder="Select Tank Size*"
            value={filter.Fish.tankSize}
            onChange={(value) => {
              setFilter((prev) => ({
                ...prev,
                Fish: { ...prev.Fish, tankSize: value },
              }));
              handleFilterSelect({
                ...filter,
                Fish: { ...filter.Fish, tankSize: value },
              });
            }}
            type="tankSize"
            countList={adCnt?.tankSize}
          />
          <MultiSelection
            data={selectData.filters.fish.careLevel}
            placeholder="Select Care Level*"
            value={filter.Fish.careLevel}
            onChange={(value) => {
              setFilter((prev) => ({
                ...prev,
                Fish: { ...prev.Fish, careLevel: value },
              }));
              handleFilterSelect({
                ...filter,
                Fish: { ...filter.Fish, careLevel: value },
              });
            }}
            type="careLevel"
            countList={adCnt?.careLevel}
          />

          <MultiSelection
            data={selectData.filters.fish.diet}
            placeholder="Select Diet*"
            value={filter.Fish.diet}
            onChange={(value) => {
              setFilter((prev) => ({
                ...prev,
                Fish: { ...prev.Fish, diet: value },
              }));
              handleFilterSelect({
                ...filter,
                Fish: { ...filter.Fish, diet: value },
              });
            }}
            type="diet"
            countList={adCnt?.diet}
          />

          {isAdvancedFilter && (
            <>
              <FilterOptionWrapper>Advanced Filter</FilterOptionWrapper>
              <MultiSelection
                data={selectData.filters.fish.species}
                placeholder="Select Breed"
                value={filter.Fish.species}
                onChange={(value) => {
                  setFilter((prev) => ({
                    ...prev,
                    Fish: { ...prev.Fish, species: value },
                  }));
                  handleFilterSelect({
                    ...filter,
                    Fish: { ...filter.Fish, species: value },
                  });
                }}
                type="species"
                countList={adCnt?.species}
              />
              <MultiSelection
                data={selectData.filters.SellerRating}
                placeholder="Select Seller Rating"
                value={filter.Fish.sellerRating}
                onChange={(value) => {
                  setFilter((prev) => ({
                    ...prev,
                    Fish: { ...prev.Fish, sellerRating: value },
                  }));
                  handleFilterSelect({
                    ...filter,
                    Fish: { ...filter.Fish, sellerRating: value },
                  });
                }}
                type="itemSellerRating"
                countList={adCnt?.itemSellerRating}
              />
            </>
          )}
          <ShowAdvancedFilter
            onClick={() => setIsAdvancedFilter((prev) => !prev)}
          >
            {isAdvancedFilter ? "Hide" : "Show"} Advanced Filter
          </ShowAdvancedFilter>
        </>
      )}
      {filter.subCategory == "Reptile" && (
        <>
          <MultiSelection
            data={selectData.filters.reptiles.age}
            placeholder="Select Age*"
            value={filter.Reptiles.age}
            onChange={(value) => {
              setFilter((prev) => ({
                ...prev,
                Reptiles: { ...prev.Reptiles, age: value },
              }));
              handleFilterSelect({
                ...filter,
                Reptiles: { ...filter.Reptiles, age: value },
              });
            }}
            type="age"
            countList={adCnt?.age}
          />
          <MultiSelection
            data={selectData.filters.reptiles.gender}
            placeholder="Select Gender*"
            value={filter.Reptiles.gender}
            onChange={(value) => {
              setFilter((prev) => ({
                ...prev,
                Reptiles: { ...prev.Reptiles, gender: value },
              }));
              handleFilterSelect({
                ...filter,
                Reptiles: { ...filter.Reptiles, gender: value },
              });
            }}
            type="gender"
            countList={adCnt?.gender}
          />
          <MultiSelection
            data={selectData.filters.reptiles.size}
            placeholder="Select Size*"
            value={filter.Reptiles.size}
            onChange={(value) => {
              setFilter((prev) => ({
                ...prev,
                Reptiles: { ...prev.Reptiles, size: value },
              }));
              handleFilterSelect({
                ...filter,
                Reptiles: { ...filter.Reptiles, size: value },
              });
            }}
            type="size"
            countList={adCnt?.size}
          />

          {isAdvancedFilter && (
            <>
              <FilterOptionWrapper>Advanced Filter</FilterOptionWrapper>
              <MultiSelection
                data={selectData.filters.reptiles.species}
                placeholder="Select Species"
                value={filter.Reptiles.species}
                onChange={(value) => {
                  setFilter((prev) => ({
                    ...prev,
                    Reptiles: { ...prev.Reptiles, species: value },
                  }));
                  handleFilterSelect({
                    ...filter,
                    Reptiles: { ...filter.Reptiles, species: value },
                  });
                }}
                type="species"
                countList={adCnt?.species}
              />
              <MultiSelection
                data={selectData.filters.SellerRating}
                placeholder="Select Seller Rating"
                value={filter.Reptiles.sellerRating}
                onChange={(value) => {
                  setFilter((prev) => ({
                    ...prev,
                    Reptiles: { ...prev.Reptiles, sellerRating: value },
                  }));
                  handleFilterSelect({
                    ...filter,
                    Reptiles: { ...filter.Reptiles, sellerRating: value },
                  });
                }}
                type="itemSellerRating"
                countList={adCnt?.itemSellerRating}
              />
            </>
          )}
          <ShowAdvancedFilter
            onClick={() => setIsAdvancedFilter((prev) => !prev)}
          >
            {isAdvancedFilter ? "Hide" : "Show"} Advanced Filter
          </ShowAdvancedFilter>
        </>
      )}
      {filter.subCategory == "Rabbits" && (
        <>
          <MultiSelection
            data={selectData.filters.rabbits.age}
            placeholder="Select Age*"
            value={filter.Rabbits.age}
            onChange={(value) => {
              setFilter((prev) => ({
                ...prev,
                Rabbits: { ...prev.Rabbits, age: value },
              }));
              handleFilterSelect({
                ...filter,
                Rabbits: { ...filter.Rabbits, age: value },
              });
            }}
            type="age"
            countList={adCnt?.age}
          />
          <MultiSelection
            data={selectData.filters.rabbits.gender}
            placeholder="Select Gender*"
            value={filter.Rabbits.gender}
            onChange={(value) => {
              setFilter((prev) => ({
                ...prev,
                Rabbits: { ...prev.Rabbits, gender: value },
              }));
              handleFilterSelect({
                ...filter,
                Rabbits: { ...filter.Rabbits, gender: value },
              });
            }}
            type="gender"
            countList={adCnt?.gender}
          />
          <MultiSelection
            data={selectData.filters.rabbits.vaccinations}
            placeholder="Select Vaccinations*"
            value={filter.Rabbits.vaccinations}
            onChange={(value) => {
              setFilter((prev) => ({
                ...prev,
                Rabbits: { ...prev.Rabbits, vaccinations: value },
              }));
              handleFilterSelect({
                ...filter,
                Rabbits: { ...filter.Rabbits, vaccinations: value },
              });
            }}
            type="vaccinations"
            countList={adCnt?.vaccinations}
          />
          {isAdvancedFilter && (
            <>
              <FilterOptionWrapper>Advanced Filter</FilterOptionWrapper>
              <MultiSelection
                data={selectData.filters.rabbits.breed}
                placeholder="Select Breed"
                value={filter.Rabbits.breed}
                onChange={(value) => {
                  setFilter((prev) => ({
                    ...prev,
                    Rabbits: { ...prev.Rabbits, breed: value },
                  }));
                  handleFilterSelect({
                    ...filter,
                    Rabbits: { ...filter.Rabbits, breed: value },
                  });
                }}
                type="breed"
                countList={adCnt?.breed}
              />
              <MultiSelection
                data={selectData.filters.SellerRating}
                placeholder="Select Seller Rating"
                value={filter.Rabbits.sellerRating}
                onChange={(value) => {
                  setFilter((prev) => ({
                    ...prev,
                    Rabbits: { ...prev.Rabbits, sellerRating: value },
                  }));
                  handleFilterSelect({
                    ...filter,
                    Rabbits: { ...filter.Rabbits, sellerRating: value },
                  });
                }}
                type="itemSellerRating"
                countList={adCnt?.itemSellerRating}
              />
            </>
          )}
          <ShowAdvancedFilter
            onClick={() => setIsAdvancedFilter((prev) => !prev)}
          >
            {isAdvancedFilter ? "Hide" : "Show"} Advanced Filter
          </ShowAdvancedFilter>
        </>
      )}
      {filter.subCategory == "Rodents" && (
        <>
          <MultiSelection
            data={selectData.filters.rodents.age}
            placeholder="Select Age*"
            value={filter.Rodents.age}
            onChange={(value) => {
              setFilter((prev) => ({
                ...prev,
                Rodents: { ...prev.Rodents, age: value },
              }));
              handleFilterSelect({
                ...filter,
                Rodents: { ...filter.Rodents, age: value },
              });
            }}
            type="age"
            countList={adCnt?.age}
          />
          <MultiSelection
            data={selectData.filters.rodents.gender}
            placeholder="Select Gender*"
            value={filter.Rodents.gender}
            onChange={(value) => {
              setFilter((prev) => ({
                ...prev,
                Rodents: { ...prev.Rodents, gender: value },
              }));
              handleFilterSelect({
                ...filter,
                Rodents: { ...filter.Rodents, gender: value },
              });
            }}
            type="gender"
            countList={adCnt?.gender}
          />

          {isAdvancedFilter && (
            <>
              <FilterOptionWrapper>Advanced Filter</FilterOptionWrapper>
              <MultiSelection
                data={selectData.filters.rodents.species}
                placeholder="Select Species"
                value={filter.Rodents.species}
                onChange={(value) => {
                  setFilter((prev) => ({
                    ...prev,
                    Rodents: { ...prev.Rodents, species: value },
                  }));
                  handleFilterSelect({
                    ...filter,
                    Rodents: { ...filter.Rodents, species: value },
                  });
                }}
                type="species"
                countList={adCnt?.species}
              />
              <MultiSelection
                data={selectData.filters.SellerRating}
                placeholder="Select Seller Rating"
                value={filter.Rodents.sellerRating}
                onChange={(value) => {
                  setFilter((prev) => ({
                    ...prev,
                    Rodents: { ...prev.Rodents, sellerRating: value },
                  }));
                  handleFilterSelect({
                    ...filter,
                    Rodents: { ...filter.Rodents, sellerRating: value },
                  });
                }}
                type="itemSellerRating"
                countList={adCnt?.itemSellerRating}
              />
            </>
          )}
          <ShowAdvancedFilter
            onClick={() => setIsAdvancedFilter((prev) => !prev)}
          >
            {isAdvancedFilter ? "Hide" : "Show"} Advanced Filter
          </ShowAdvancedFilter>
        </>
      )}
      {filter.subCategory == "Livestock" && (
        <>
          <MultiSelection
            data={selectData.filters.livestocks.age}
            placeholder="Select Age*"
            value={filter.Livestock.age}
            onChange={(value) => {
              setFilter((prev) => ({
                ...prev,
                Livestock: { ...prev.Livestock, age: value },
              }));
              handleFilterSelect({
                ...filter,
                Livestock: { ...filter.Livestock, age: value },
              });
            }}
            type="age"
            countList={adCnt?.age}
          />
          <MultiSelection
            data={selectData.filters.livestocks.gender}
            placeholder="Select Gender*"
            value={filter.Livestock.gender}
            onChange={(value) => {
              setFilter((prev) => ({
                ...prev,
                Livestock: { ...prev.Livestock, gender: value },
              }));
              handleFilterSelect({
                ...filter,
                Livestock: { ...filter.Livestock, gender: value },
              });
            }}
            type="gender"
            countList={adCnt?.gender}
          />

          {isAdvancedFilter && (
            <>
              <FilterOptionWrapper>Advanced Filter</FilterOptionWrapper>
              <MultiSelection
                data={selectData.filters.livestocks.type}
                placeholder="Select Type"
                value={filter.Livestock.type}
                onChange={(value) => {
                  setFilter((prev) => ({
                    ...prev,
                    Livestock: { ...prev.Livestock, type: value },
                  }));
                  handleFilterSelect({
                    ...filter,
                    Livestock: { ...filter.Livestock, type: value },
                  });
                }}
                type="type"
                countList={adCnt?.type}
              />
              <MultiSelection
                data={selectData.filters.SellerRating}
                placeholder="Select Seller Rating"
                value={filter.Livestock.sellerRating}
                onChange={(value) => {
                  setFilter((prev) => ({
                    ...prev,
                    Livestock: { ...prev.Livestock, sellerRating: value },
                  }));
                  handleFilterSelect({
                    ...filter,
                    Livestock: { ...filter.Livestock, sellerRating: value },
                  });
                }}
                type="itemSellerRating"
                countList={adCnt?.itemSellerRating}
              />
            </>
          )}
          <ShowAdvancedFilter
            onClick={() => setIsAdvancedFilter((prev) => !prev)}
          >
            {isAdvancedFilter ? "Hide" : "Show"} Advanced Filter
          </ShowAdvancedFilter>
        </>
      )}
      {filter.subCategory == "Horses" && (
        <>
          <MultiSelection
            data={selectData.filters.horses.age}
            placeholder="Select Age*"
            value={filter.Horses.age}
            onChange={(value) => {
              setFilter((prev) => ({
                ...prev,
                Horses: { ...prev.Horses, age: value },
              }));
              handleFilterSelect({
                ...filter,
                Horses: { ...filter.Horses, age: value },
              });
            }}
            type="age"
            countList={adCnt?.age}
          />
          <MultiSelection
            data={selectData.filters.horses.gender}
            placeholder="Select Gender*"
            value={filter.Horses.gender}
            onChange={(value) => {
              setFilter((prev) => ({
                ...prev,
                Horses: { ...prev.Horses, gender: value },
              }));
              handleFilterSelect({
                ...filter,
                Horses: { ...filter.Horses, gender: value },
              });
            }}
            type="gender"
            countList={adCnt?.gender}
          />
          <MultiSelection
            data={selectData.filters.horses.trainingLevel}
            placeholder="Select Training Level*"
            value={filter.Horses.trainingLevel}
            onChange={(value) => {
              setFilter((prev) => ({
                ...prev,
                Horses: { ...prev.Horses, trainingLevel: value },
              }));
              handleFilterSelect({
                ...filter,
                Horses: { ...filter.Horses, trainingLevel: value },
              });
            }}
            type="trainingLevel"
            countList={adCnt?.trainingLevel}
          />
          <MultiSelection
            data={selectData.filters.horses.vaccinations}
            placeholder="Select Vaccinations*"
            value={filter.Horses.vaccinations}
            onChange={(value) => {
              setFilter((prev) => ({
                ...prev,
                Horses: { ...prev.Horses, vaccinations: value },
              }));
              handleFilterSelect({
                ...filter,
                Horses: { ...filter.Horses, vaccinations: value },
              });
            }}
            type="vaccinations"
            countList={adCnt?.vaccinations}
          />
          <MultiSelection
            data={selectData.filters.horses.health}
            placeholder="Select Health Verification*"
            value={filter.Horses.healthCertification}
            onChange={(value) => {
              setFilter((prev) => ({
                ...prev,
                Horses: { ...prev.Horses, healthCertification: value },
              }));
              handleFilterSelect({
                ...filter,
                Horses: { ...filter.Horses, healthCertification: value },
              });
            }}
            type="healthCertification"
            countList={adCnt?.healthCertification}
          />
          <MultiSelection
            data={selectData.filters.horses.hoofCare}
            placeholder="Select Hoof Care*"
            value={filter.Horses.hoofCare}
            onChange={(value) => {
              setFilter((prev) => ({
                ...prev,
                Horses: { ...prev.Horses, hoofCare: value },
              }));
              handleFilterSelect({
                ...filter,
                Horses: { ...filter.Horses, hoofCare: value },
              });
            }}
            type="hoofCare"
            countList={adCnt?.hoofCare}
          />
          <MultiSelection
            data={selectData.filters.horses.insurance}
            placeholder="Select Insurance*"
            value={filter.Horses.insurance}
            onChange={(value) => {
              setFilter((prev) => ({
                ...prev,
                Horses: { ...prev.Horses, insurance: value },
              }));
              handleFilterSelect({
                ...filter,
                Horses: { ...filter.Horses, insurance: value },
              });
            }}
            type="insurance"
            countList={adCnt?.insurance}
          />
          {isAdvancedFilter && (
            <>
              <FilterOptionWrapper>Advanced Filter</FilterOptionWrapper>
              <MultiSelection
                data={selectData.filters.horses.breed}
                placeholder="Select Breed"
                value={filter.Horses.breed}
                onChange={(value) => {
                  setFilter((prev) => ({
                    ...prev,
                    Horses: { ...prev.Horses, breed: value },
                  }));
                  handleFilterSelect({
                    ...filter,
                    Horses: { ...filter.Horses, breed: value },
                  });
                }}
                type="breed"
                countList={adCnt?.breed}
              />
              <MultiSelection
                data={selectData.filters.SellerRating}
                placeholder="Select Seller Rating"
                value={filter.Horses.sellerRating}
                onChange={(value) => {
                  setFilter((prev) => ({
                    ...prev,
                    Horses: { ...prev.Horses, sellerRating: value },
                  }));
                  handleFilterSelect({
                    ...filter,
                    Horses: { ...filter.Horses, sellerRating: value },
                  });
                }}
                type="itemSellerRating"
                countList={adCnt?.itemSellerRating}
              />
            </>
          )}
          <ShowAdvancedFilter
            onClick={() => setIsAdvancedFilter((prev) => !prev)}
          >
            {isAdvancedFilter ? "Hide" : "Show"} Advanced Filter
          </ShowAdvancedFilter>
        </>
      )}
      {filter.subCategory == "Amphibian" && (
        <>
          <MultiSelection
            data={selectData.filters.amphibian.age}
            placeholder="Select Age*"
            value={filter.Amphibian.age}
            onChange={(value) => {
              setFilter((prev) => ({
                ...prev,
                Amphibian: { ...prev.Amphibian, age: value },
              }));
              handleFilterSelect({
                ...filter,
                Amphibian: { ...filter.Amphibian, age: value },
              });
            }}
            type="age"
            countList={adCnt?.age}
          />
          <MultiSelection
            data={selectData.filters.amphibian.gender}
            placeholder="Select Gender*"
            value={filter.Amphibian.gender}
            onChange={(value) => {
              setFilter((prev) => ({
                ...prev,
                Amphibian: { ...prev.Amphibian, gender: value },
              }));
              handleFilterSelect({
                ...filter,
                Amphibian: { ...filter.Amphibian, gender: value },
              });
            }}
            type="gender"
            countList={adCnt?.gender}
          />

          {isAdvancedFilter && (
            <>
              <FilterOptionWrapper>Advanced Filter</FilterOptionWrapper>
              <MultiSelection
                data={selectData.filters.amphibian.species}
                placeholder="Select Species"
                value={filter.Amphibian.species}
                onChange={(value) => {
                  setFilter((prev) => ({
                    ...prev,
                    Amphibian: { ...prev.Amphibian, species: value },
                  }));
                  handleFilterSelect({
                    ...filter,
                    Amphibian: { ...filter.Amphibian, species: value },
                  });
                }}
                type="species"
                countList={adCnt?.species}
              />
              <MultiSelection
                data={selectData.filters.SellerRating}
                placeholder="Select Seller Rating"
                value={filter.Amphibian.sellerRating}
                onChange={(value) => {
                  setFilter((prev) => ({
                    ...prev,
                    Amphibian: { ...prev.Amphibian, sellerRating: value },
                  }));
                  handleFilterSelect({
                    ...filter,
                    Amphibian: { ...filter.Amphibian, sellerRating: value },
                  });
                }}
                type="itemSellerRating"
                countList={adCnt?.itemSellerRating}
              />
            </>
          )}
          <ShowAdvancedFilter
            onClick={() => setIsAdvancedFilter((prev) => !prev)}
          >
            {isAdvancedFilter ? "Hide" : "Show"} Advanced Filter
          </ShowAdvancedFilter>
        </>
      )}
      {itemCategory == "Pet Supplies" && (
        <>
          <MultiSelection
            data={selectData.filters.supplies.type}
            placeholder="Select Pet Type*"
            value={filter.supplies.type}
            onChange={(value) => {
              setFilter((prev) => ({
                ...prev,
                supplies: { ...prev.supplies, type: value },
              }));
              handleFilterSelect({
                ...filter,
                supplies: { ...filter.supplies, type: value },
              });
            }}
            type="type"
            countList={adCnt?.type}
          />

          {isAdvancedFilter && (
            <>
              <FilterOptionWrapper>Advanced Filter</FilterOptionWrapper>

              <MultiSelection
                data={selectData.filters.SellerRating}
                placeholder="Select Seller Rating"
                value={filter.supplies.sellerRating}
                onChange={(value) => {
                  setFilter((prev) => ({
                    ...prev,
                    supplies: { ...prev.supplies, sellerRating: value },
                  }));
                  handleFilterSelect({
                    ...filter,
                    supplies: { ...filter.supplies, sellerRating: value },
                  });
                }}
                type="itemSellerRating"
                countList={adCnt?.itemSellerRating}
              />
            </>
          )}
          <ShowAdvancedFilter
            onClick={() => setIsAdvancedFilter((prev) => !prev)}
          >
            {isAdvancedFilter ? "Hide" : "Show"} Advanced Filter
          </ShowAdvancedFilter>
        </>
      )}
    </>
    // )
  );
};
