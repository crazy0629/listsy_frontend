import { InputRange, MultiSelection, SingleSelection } from "@/components";
import React, { useEffect, useRef, useState } from "react";
import { FilterOptionWrapper, ShowAdvancedFilter } from "../../main.styles";
import { selectData } from "@/modules/upload/detailsform/DataList/data-estate";
import axios from "axios";
import { SERVER_URI } from "@/config";
import { useRouter } from "next/router";

type Props = {
  onChange: (data: any) => void;
  itemCategory: string;
  page: string;
};

export const EstateFilter: React.FC<Props> = ({
  onChange,
  itemCategory,
  page,
}) => {
  const [filter, setFilter] = useState({
    SearchWithin: "",
    built: "",
    plot: "",
    type: [] as string[],
    bedrooms: [] as string[],
    bathrooms: [] as string[],
    tenure: [] as string[],
    condition: [] as string[],
    year: [] as string[],
    energy: [] as string[],
    nearest: [] as string[],
    facilities: [] as string[],
    sellerRating: [] as string[],
    centerLocationSelected: false,
    selectedLocation: null,
  });

  const router = useRouter();
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

  useEffect(() => {
    if (router.query.SearchWithin) {
      setFilter((prev) => ({
        ...prev,
        SearchWithin: router.query.SearchWithin.toString(),
      }));
    }
    if (router.query.type) {
      setFilter((prev) => ({
        ...prev,
        type: router.query.type.toString().split("%"),
      }));
    }
    if (router.query.bedrooms) {
      setFilter((prev) => ({
        ...prev,
        bedrooms: router.query.bedrooms.toString().split("%"),
      }));
    }
    if (router.query.bathrooms) {
      setFilter((prev) => ({
        ...prev,
        bathrooms: router.query.bathrooms.toString().split("%"),
      }));
    }
    if (router.query.tenure) {
      setFilter((prev) => ({
        ...prev,
        tenure: router.query.tenure.toString().split("%"),
      }));
    }
    if (router.query.condition) {
      setFilter((prev) => ({
        ...prev,
        condition: router.query.condition.toString().split("%"),
      }));
    }
    if (router.query.year) {
      setFilter((prev) => ({
        ...prev,
        year: router.query.year.toString().split("%"),
      }));
    }
    if (router.query.energy) {
      setFilter((prev) => ({
        ...prev,
        energy: router.query.energy.toString().split("%"),
      }));
    }
    if (router.query.nearest) {
      setFilter((prev) => ({
        ...prev,
        nearest: router.query.nearest.toString().split("%"),
      }));
    }
    if (router.query.facilities) {
      setFilter((prev) => ({
        ...prev,
        facilities: router.query.facilities.toString().split("%"),
      }));
    }

    if (router.query.sellerRating) {
      setFilter((prev) => ({
        ...prev,
        sellerRating: router.query.sellerRating.toString().split("%"),
      }));
    }
    if (router.query.minPrice) {
      setMinPrice(router.query.minPrice.toString());
    }
    if (router.query.maxPrice) {
      setMaxPrice(router.query.maxPrice.toString());
    }
  }, [router.query]);

  const setRouterPath = (data: any, minPrice: string, maxPrice: string) => {
    const queryPath: any = {};
    if (data.SearchWithin !== "") {
      queryPath.SearchWithin = data.SearchWithin;
    }
    if (data.type.length > 0) {
      queryPath.type = data.type.join("%");
    }
    if (data.bedrooms.length > 0) {
      queryPath.bedrooms = data.bedrooms.join("%");
    }
    if (data.bathrooms.length > 0) {
      queryPath.bathrooms = data.bathrooms.join("%");
    }
    if (data.tenure.length > 0) {
      queryPath.tenure = data.tenure.join("%");
    }
    if (data.condition.length > 0) {
      queryPath.condition = data.condition.join("%");
    }
    if (data.year.length > 0) {
      queryPath.condition = data.condition.join("%");
    }
    if (data.energy.length > 0) {
      queryPath.energy = data.energy.join("%");
    }
    if (data.nearest.length > 0) {
      queryPath.nearest = data.nearest.join("%");
    }
    if (data.facilities.length > 0) {
      queryPath.facilities = data.facilities.join("%");
    }
    if (data.sellerRating.length > 0) {
      queryPath.sellerRating = data.sellerRating.join("%");
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

  const donetyping = async () => {
    setIsLoading(true);
    const adsCountData = await axios.post(
      `${SERVER_URI}/estate/getCountOfEachFilter`,
      {
        minPrice: minPrice,
        maxPrice: maxPrice,
        itemCategory,
        itemSellerRating: selectData.sellerRating,
        itemType: selectData.type,
        itemBedrooms: selectData.bedrooms,
        itemBathrooms: selectData.bathrooms,
        itemTenure: selectData.tenure,
        itemCondition: selectData.condition,
        itemYear: selectData.year,
        itemEnergy: selectData.energy,
        itemNearest: selectData.nearest,
        itemFacilities: selectData.facilities,
        itemSearchRange: [-1, 0, 1, 5, 15, 30, 50, 100, 200],
        address,
        countryCode,
        selectedLocation: filter.selectedLocation,
        centerLocationAvailable: filter.centerLocationSelected,
        filter,
      }
    );
    console.log(12345, adsCountData.data);
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

  const handleFilterSelect = async (label: string, value: any) => {
    setFilter((prev) => ({ ...prev, [label]: value }));
    setRouterPath({ ...filter, [label]: value }, minPrice, maxPrice);
  };

  return (
    adCnt != null && (
      <>
        <FilterOptionWrapper>Main Filter</FilterOptionWrapper>
        <SingleSelection
          data={selectData.searchWithin}
          placeholder="Nationwide"
          value={filter.SearchWithin}
          onChange={(value) => handleFilterSelect("SearchWithin", value)}
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
          data={selectData.type}
          placeholder="Select Property type"
          value={filter.type}
          onChange={(value) => handleFilterSelect("type", value)}
          type="itemPropertyType"
          countList={adCnt.itemPropertyType}
        />

        <MultiSelection
          data={selectData.bedrooms}
          placeholder="Select Bedrooms"
          value={filter.bedrooms}
          onChange={(value) => handleFilterSelect("bedrooms", value)}
          type="itemBedrooms"
          countList={adCnt.itemBedrooms}
        />
        <MultiSelection
          data={selectData.bathrooms}
          placeholder="Select Bathrooms"
          value={filter.bathrooms}
          onChange={(value) => handleFilterSelect("bathrooms", value)}
          type="itemBathrooms"
          countList={adCnt.itemBathrooms}
        />

        {isAdvancedFilter && (
          <>
            <FilterOptionWrapper>Advanced Filter</FilterOptionWrapper>
            <MultiSelection
              data={selectData.tenure}
              placeholder="Select Tenure"
              value={filter.tenure}
              onChange={(value) => handleFilterSelect("tenure", value)}
              type="itemTenure"
              countList={adCnt.itemTenure}
            />
            <MultiSelection
              data={selectData.condition}
              placeholder="Select Property Condition"
              value={filter.condition}
              onChange={(value) => handleFilterSelect("condition", value)}
              type="itemCondition"
              countList={adCnt.itemCondition}
            />
            <MultiSelection
              data={selectData.year}
              placeholder="Select Year Built"
              value={filter.year}
              onChange={(value) => handleFilterSelect("year", value)}
              type="itemYear"
              countList={adCnt.itemYear}
            />
            <MultiSelection
              data={selectData.energy}
              placeholder="Select Energy Efficiency Rating"
              value={filter.energy}
              onChange={(value) => handleFilterSelect("energy", value)}
              type="itemEnergy"
              countList={adCnt.itemEnergy}
            />

            <MultiSelection
              data={selectData.nearest}
              placeholder="Select Nearest Top Attractions"
              value={filter.nearest}
              onChange={(value) => handleFilterSelect("nearest", value)}
              type="itemNearest"
              countList={adCnt.itemNearest}
            />
            <MultiSelection
              data={selectData.facilities}
              placeholder="Select Facilities"
              value={filter.facilities}
              onChange={(value) => handleFilterSelect("facilities", value)}
              type="itemFacilities"
              countList={adCnt.itemFacilities}
            />
            <MultiSelection
              data={selectData.sellerRating}
              placeholder="Select Seller Rating"
              value={filter.sellerRating}
              onChange={(value) => handleFilterSelect("sellerRating", value)}
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
