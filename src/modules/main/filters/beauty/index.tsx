import { InputRange, MultiSelection, SingleSelection } from "@/components";
import React, { useEffect, useRef, useState } from "react";
import { FilterOptionWrapper, ShowAdvancedFilter } from "../../main.styles";
import { selectData } from "@/modules/upload/detailsform/DataList/data-beauty";
import axios from "axios";
import { SERVER_URI } from "@/config";
import { useRouter } from "next/router";

type Props = {
  onChange: (data: any) => void;
  itemCategory: string;
  page: string;
};

export const BeautyFilter: React.FC<Props> = ({
  onChange,
  itemCategory,
  page,
}) => {
  const [filter, setFilter] = useState({
    SearchWithin: "",
    brand: [] as string[],
    itemCondition: [] as string[],
    gender: [] as string[],
    skin: [] as string[],
    ingredients: [] as string[],
    size: [] as string[],
    certifications: [] as string[],
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
    if (router.query.brand) {
      setFilter((prev) => ({
        ...prev,
        brand: router.query.brand.toString().split("%"),
      }));
    }
    if (router.query.itemCondition) {
      setFilter((prev) => ({
        ...prev,
        itemCondition: router.query.itemCondition.toString().split("%"),
      }));
    }
    if (router.query.gender) {
      setFilter((prev) => ({
        ...prev,
        gender: router.query.gender.toString().split("%"),
      }));
    }
    if (router.query.skin) {
      setFilter((prev) => ({
        ...prev,
        skin: router.query.skin.toString().split("%"),
      }));
    }
    if (router.query.ingredients) {
      setFilter((prev) => ({
        ...prev,
        ingredients: router.query.ingredients.toString().split("%"),
      }));
    }
    if (router.query.size) {
      setFilter((prev) => ({
        ...prev,
        size: router.query.size.toString().split("%"),
      }));
    }
    if (router.query.certifications) {
      setFilter((prev) => ({
        ...prev,
        certifications: router.query.certifications.toString().split("%"),
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
    if (data.brand.length > 0) {
      queryPath.brand = data.brand.join("%");
    }
    if (data.itemCondition.length > 0) {
      queryPath.itemCondition = data.itemCondition.join("%");
    }
    if (data.gender.length > 0) {
      queryPath.gender = data.gender.join("%");
    }
    if (data.skin.length > 0) {
      queryPath.skin = data.skin.join("%");
    }
    if (data.ingredients.length > 0) {
      queryPath.ingredients = data.ingredients.join("%");
    }
    if (data.size.length > 0) {
      queryPath.size = data.size.join("%");
    }
    if (data.certifications.length > 0) {
      queryPath.certifications = data.certifications.join("%");
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
      `${SERVER_URI}/beauty/getCountOfEachFilter`,
      {
        minPrice: minPrice,
        maxPrice: maxPrice,
        itemCategory,
        itemSellerRating: selectData.sellerRating,
        itemCondition: selectData.condition,
        itemBrand: selectData.brand,
        itemGender: selectData.gender,
        itemSkin: selectData.skin,
        itemIngredients: selectData.ingredients,
        itemSize: selectData.size,
        itemCertifications: selectData.certifications,
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
          data={selectData.condition}
          placeholder="Select Condition"
          value={filter.itemCondition}
          onChange={(value) => handleFilterSelect("itemCondition", value)}
          type="itemCondition"
          countList={adCnt.itemCondition}
        />
        <MultiSelection
          data={selectData.brand}
          placeholder="Select Brand"
          value={filter.brand}
          onChange={(value) => handleFilterSelect("brand", value)}
          type="itemBrand"
          countList={adCnt.itemBrand}
        />

        {isAdvancedFilter && (
          <>
            <FilterOptionWrapper>Advanced Filter</FilterOptionWrapper>
            <MultiSelection
              data={selectData.gender}
              placeholder="Select Gender/Sex"
              value={filter.gender}
              onChange={(value) => handleFilterSelect("gender", value)}
              type="itemGender"
              countList={adCnt.itemGender}
            />
            <MultiSelection
              data={selectData.skin}
              placeholder="Select Skin/Hair Type"
              value={filter.skin}
              onChange={(value) => handleFilterSelect("skin", value)}
              type="itemSkin"
              countList={adCnt.itemSkin}
            />
            <MultiSelection
              data={selectData.ingredients}
              placeholder="Select Ingredients"
              value={filter.ingredients}
              onChange={(value) => handleFilterSelect("ingredients", value)}
              type="itemIngredients"
              countList={adCnt.itemIngredients}
            />
            <MultiSelection
              data={selectData.size}
              placeholder="Select Size/Volume"
              value={filter.size}
              onChange={(value) => handleFilterSelect("size", value)}
              type="itemSize"
              countList={adCnt.itemSize}
            />
            <MultiSelection
              data={selectData.certifications}
              placeholder="Select Certifications"
              value={filter.certifications}
              onChange={(value) => handleFilterSelect("certifications", value)}
              type="itemCertifications"
              countList={adCnt.itemCertifications}
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
