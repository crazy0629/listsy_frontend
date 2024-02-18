import { InputRange, MultiSelection, SingleSelection } from "@/components";
import React, { useEffect, useRef, useState } from "react";
import { FilterOptionWrapper, ShowAdvancedFilter } from "../../main.styles";
import { selectData } from "@/modules/upload/detailsform/DataList/data-toy";
import axios from "axios";
import { SERVER_URI } from "@/config";

type Props = {
  onChange: (data: any) => void;
  itemCategory: string;
};

export const ToysFilter: React.FC<Props> = ({ onChange, itemCategory }) => {
  const [filter, setFilter] = useState({
    SearchWithin: "",
    priceRange: [] as string[],
    itemAge: [] as string[],
    itemBrand: [] as string[],
    itemGender: [] as string[],
    itemEducation: [] as string[],
    sellerType: [] as string[],
    sellerRating: [] as string[],
    centerLocationSelected: false,
    selectedLocation: null,
  });

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [isAdvancedFilter, setIsAdvancedFilter] = useState(false);

  const [address, setAddress] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [adCnt, setAdCnt] = useState(null);
  const [currency, setCurrency] = useState("$");
  const [isLoading, setIsLoading] = useState(false);
  const typingTimer = useRef(null);
  const [priceChanged, setPriceChanged] = useState(false);

  const getLocationInfo = () => {
    let locationAddress = localStorage.getItem("locationAddress");
    let countryCode = localStorage.getItem("locationCountryCode");
    setAddress(locationAddress);
    setCountryCode(countryCode);

    getCountryCode(
      Number(localStorage.getItem("centerlat")),
      Number(localStorage.getItem("centerlng"))
    );
  };

  const donetyping = async () => {
    setIsLoading(true);
    const adsCountData = await axios.post(
      `${SERVER_URI}/toys/getCountOfEachFilter`,
      {
        minPrice: minPrice,
        maxPrice: maxPrice,
        itemCategory,
        itemSellerRating: selectData.sellerRating,
        itemAgeGroup: selectData.itemAge,
        itemBrand: selectData.itemBrand,
        itemGender: selectData.itemGender,
        itemEducation: selectData.itemEducation,
        itemSellerType: selectData.sellerType,
        itemSearchRange: [-1, 0, 1, 5, 15, 30, 50, 100, 200],
        address,
        countryCode,
        selectedLocation: filter.selectedLocation,
        centerLocationAvailable: filter.centerLocationSelected,
        filter,
      }
    );
    setAdCnt(adsCountData.data);
    setIsLoading(false);
  };

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
    onChange(filter);
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

  return (
    adCnt != null && (
      <>
        <FilterOptionWrapper>Main Filter</FilterOptionWrapper>
        <SingleSelection
          data={selectData.searchWithin}
          placeholder="Nationwide"
          value={filter.SearchWithin}
          onChange={(value) =>
            setFilter((prev) => ({ ...prev, SearchWithin: value }))
          }
          type="itemSearchRange"
          countList={adCnt.itemRangeInfo}
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
          suffix={adCnt.itemPriceRange != -1 ? adCnt.itemPriceRange : 0}
        />
        <MultiSelection
          data={selectData.itemAge}
          placeholder="Select Age Group"
          value={filter.itemAge}
          onChange={(value) =>
            setFilter((prev) => ({ ...prev, itemAge: value }))
          }
          type="itemAgeGroup"
          countList={adCnt.itemAgeGroup}
        />

        {isAdvancedFilter && (
          <>
            <FilterOptionWrapper>Advanced Filter</FilterOptionWrapper>
            <MultiSelection
              data={selectData.itemBrand}
              placeholder="Select Brand"
              value={filter.itemBrand}
              onChange={(value) =>
                setFilter((prev) => ({ ...prev, itemBrand: value }))
              }
              type="itemBrand"
              countList={adCnt.itemBrand}
            />
            <MultiSelection
              data={selectData.itemGender}
              placeholder="Select Gender Preference"
              value={filter.itemGender}
              onChange={(value) =>
                setFilter((prev) => ({ ...prev, itemGender: value }))
              }
              type="itemGender"
              countList={adCnt.itemGender}
            />
            <MultiSelection
              data={selectData.itemEducation}
              placeholder="Select Educational Value"
              value={filter.itemEducation}
              onChange={(value) =>
                setFilter((prev) => ({ ...prev, itemEducation: value }))
              }
              type="itemEducation"
              countList={adCnt.itemEducation}
            />
            <MultiSelection
              data={selectData.sellerType}
              placeholder="Select Seller Type"
              value={filter.sellerType}
              onChange={(value) =>
                setFilter((prev) => ({ ...prev, sellerType: value }))
              }
              type="itemSellerType"
              countList={adCnt.itemSellerType}
            />
            <MultiSelection
              data={selectData.sellerRating}
              placeholder="Select Seller Rating"
              value={filter.sellerRating}
              onChange={(value) =>
                setFilter((prev) => ({ ...prev, sellerRating: value }))
              }
              type="itemSellerRating"
              countList={adCnt.itemSellerRating}
            />
          </>
        )}
        <ShowAdvancedFilter
          onClick={() => setIsAdvancedFilter((prev) => !prev)}
        >
          {isAdvancedFilter ? "Hide" : "Show"} Advanced Filter
        </ShowAdvancedFilter>
      </>
    )
  );
};
