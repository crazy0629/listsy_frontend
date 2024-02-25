import { InputRange, MultiSelection, SingleSelection } from "@/components";
import React, { useEffect, useRef, useState } from "react";
import { FilterOptionWrapper, ShowAdvancedFilter } from "../../main.styles";
import { selectData } from "@/modules/upload/detailsform/DataList/data-furniture";
import axios from "axios";
import { SERVER_URI } from "@/config";
import { useRouter } from "next/router";

type Props = {
  onChange: (data: any) => void;
  itemCategory: string;
  page: string;
};

export const FurnitureFilter: React.FC<Props> = ({
  onChange,
  itemCategory,
  page,
}) => {
  const [filter, setFilter] = useState({
    SearchWithin: "",
    priceRange: [] as string[],
    itemCondition: [] as string[],
    furnitureType: [] as string[],
    sellerType: [] as string[],
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

  //   useEffect(() => {
  //     if (filter.instrumentType.length == 0) {
  //       router.push({
  //         pathname: page,
  //       });
  //       return;
  //     }
  //     const typeList = filter.instrumentType.join("-");

  //     router.push({
  //       pathname: page,
  //       query: { type: typeList },
  //     });
  //   }, [filter.instrumentType]);

  const donetyping = async () => {
    setIsLoading(true);
    // const adsCountData = await axios.post(
    //   `${SERVER_URI}/music/getCountOfEachFilter`,
    //   {
    //     minPrice: minPrice,
    //     maxPrice: maxPrice,
    //     itemCategory,
    //     itemSellerRating: selectData.sellerRating,
    //     itemInstrumentType: selectData.type[itemCategory],
    //     itemCondition: selectData.condition,
    //     itemAge: selectData.age,
    //     itemBrand: selectData.brand,
    //     itemSellerType: selectData.sellerType,
    //     itemSearchRange: [-1, 0, 1, 5, 15, 30, 50, 100, 200],
    //     address,
    //     countryCode,
    //     selectedLocation: filter.selectedLocation,
    //     centerLocationAvailable: filter.centerLocationSelected,
    //     filter,
    //   }
    // );
    // setAdCnt(adsCountData.data);
    setIsLoading(false);
  };

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

  return (
    // adCnt != null && (
    <>
      <FilterOptionWrapper>Main Filter</FilterOptionWrapper>
      <SingleSelection
        data={selectData.searchWithin}
        placeholder="Nationwide"
        value={filter.SearchWithin}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, SearchWithin: value }))
        }
        // type="itemSearchRange"
        // countList={adCnt.itemRangeInfo}
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
      <MultiSelection
        data={selectData.type[itemCategory]}
        placeholder="Select Furniture Type"
        value={filter.furnitureType}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, furnitureType: value }))
        }
        // type="itemFurnitureType"
        // countList={adCnt.itemFurnitureType}
      />
      <MultiSelection
        data={selectData.condition}
        placeholder="Select Condition"
        value={filter.itemCondition}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, itemCondition: value }))
        }
        // type="itemCondition"
        // countList={adCnt.itemCondition}
      />

      <MultiSelection
        data={selectData.sellerType}
        placeholder="Select Seller Type"
        value={filter.sellerType}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, sellerType: value }))
        }
        // type="itemSellerType"
        // countList={adCnt.itemSellerType}
      />

      {isAdvancedFilter && (
        <>
          <FilterOptionWrapper>Advanced Filter</FilterOptionWrapper>

          <MultiSelection
            data={selectData.sellerRating}
            placeholder="Select Seller Rating"
            value={filter.sellerRating}
            onChange={(value) =>
              setFilter((prev) => ({ ...prev, sellerRating: value }))
            }
            // type="itemSellerRating"
            // countList={adCnt.itemSellerRating}
          />
        </>
      )}
      <ShowAdvancedFilter onClick={() => setIsAdvancedFilter((prev) => !prev)}>
        {isAdvancedFilter ? "Hide" : "Show"} Advanced Filter
      </ShowAdvancedFilter>
    </>
    // )
  );
};