import { InputRange, MultiSelection, SingleSelection } from "@/components";
import React, { useEffect, useRef, useState } from "react";
import { FilterOptionWrapper, ShowAdvancedFilter } from "../../main.styles";
import { selectData } from "@/modules/upload/detailsform/DataList/data-service";
import axios from "axios";
import { SERVER_URI } from "@/config";
import { useRouter } from "next/router";

type Props = {
  onChange: (data: any) => void;
  itemCategory: string;
  page: string;
};

export const ServiceFilter: React.FC<Props> = ({
  onChange,
  itemCategory,
  page,
}) => {
  const [filter, setFilter] = useState({
    SearchWithin: "",
    serviceType: [] as string[],
    providerType: [] as string[],
    licenses: [] as string[],
    cancellationPolicy: [] as string[],
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
    if (router.query.serviceType) {
      setFilter((prev) => ({
        ...prev,
        serviceType: router.query.serviceType.toString().split("%"),
      }));
    }
    if (router.query.providerType) {
      setFilter((prev) => ({
        ...prev,
        providerType: router.query.providerType.toString().split("%"),
      }));
    }
    if (router.query.licenses) {
      setFilter((prev) => ({
        ...prev,
        licenses: router.query.licenses.toString().split("%"),
      }));
    }
    if (router.query.cancellationPolicy) {
      setFilter((prev) => ({
        ...prev,
        cancellationPolicy: router.query.cancellationPolicy
          .toString()
          .split("%"),
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
    if (data.serviceType.length > 0) {
      queryPath.serviceType = data.serviceType.join("%");
    }
    if (data.providerType.length > 0) {
      queryPath.providerType = data.providerType.join("%");
    }
    if (data.licenses.length > 0) {
      queryPath.licenses = data.licenses.join("%");
    }
    if (data.cancellationPolicy.length > 0) {
      queryPath.cancellationPolicy = data.cancellationPolicy.join("%");
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
      `${SERVER_URI}/services/getCountOfEachFilter`,
      {
        minPrice: minPrice,
        maxPrice: maxPrice,
        itemCategory: itemCategory,
        itemSellerRating: selectData.sellerRating,
        itemServiceType: selectData.type[itemCategory],
        itemProviderType: selectData.providerType,
        itemCancellationPolicy: selectData.cancellationPolicy,
        itemLicensesGroup: selectData.licenses,
        itemSearchRange: [-1, 0, 1, 5, 15, 30, 50, 100, 200],
        address,
        countryCode,
        selectedLocation: filter.selectedLocation,
        centerLocationAvailable: filter.centerLocationSelected,
        filter,
      }
    );
    console.log(123123, adsCountData.data);
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
      // Perform any action here after 5 seconds of inactivity
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
          data={selectData.type[itemCategory]}
          placeholder="Select Service Type"
          value={filter.serviceType}
          onChange={(value) => handleFilterSelect("serviceType", value)}
          type="itemServiceType"
          countList={adCnt.itemServiceType}
        />
        <MultiSelection
          data={selectData.providerType}
          placeholder="Select Provider Type"
          value={filter.providerType}
          onChange={(value) => handleFilterSelect("providerType", value)}
          type="itemProviderType"
          countList={adCnt.itemProviderType}
        />
        {isAdvancedFilter && (
          <>
            <FilterOptionWrapper>Advanced Filter</FilterOptionWrapper>
            <MultiSelection
              data={selectData.licenses}
              placeholder="Select Licenses"
              value={filter.licenses}
              onChange={(value) => handleFilterSelect("licenses", value)}
              type="itemLicensesGroup"
              countList={adCnt.itemLicensesGroup}
            />
            <MultiSelection
              data={selectData.cancellationPolicy}
              placeholder="Select Cancellation Policy"
              value={filter.cancellationPolicy}
              onChange={(value) =>
                handleFilterSelect("cancellationPolicy", value)
              }
              type="itemCancellationPolicy"
              countList={adCnt.itemCancellationPolicy}
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
