import { InputRange, MultiSelection, SingleSelection } from "@/components";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FilterOptionWrapper, ShowAdvancedFilter } from "../../main.styles";
import { selectData } from "@/modules/upload/detailsform/DataList/data-electronics";
import axios from "axios";
import { SERVER_URI } from "@/config";

type Props = {
  onChange: (data: any) => void;
};

export const LapTopFilter: React.FC<Props> = ({ onChange }) => {
  const [filter, setFilter] = useState({
    SearchWithin: "",
    priceRange: [] as string[],
    itemCondition: [] as string[],
    type: [] as string[],
    brand: [] as string[],
    ramSize: [] as string[],
    processor: [] as string[],
    screenSize: [] as string[],
    storageCapacity: [] as string[],
    operatingSystem: [] as string[],
    colour: [] as string[],
    warrantyInformation: [] as string[],
    sellerRating: [] as string[],
    batteryLife: [] as string[],
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
  const [locationInfo, setLocationInfo] = useState(null);

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
    getCountryCode(
      Number(localStorage.getItem("centerlat")),
      Number(localStorage.getItem("centerlng"))
    );
  };

  const donetyping = async () => {
    setIsLoading(true);
    const adsCountData = await axios.post(
      `${SERVER_URI}/sale/getCountOfEachFilter`,
      {
        minPrice: minPrice,
        maxPrice: maxPrice,
        itemCategory: "Laptops and Desktop Computers",
        itemRamSize: selectData.forSale.Laptops.ramSize,
        itemSellerRating: selectData.forSale.Laptops.SellerRating,
        itemStorageCapacity: selectData.forSale.Laptops.StorageCapacity,
        itemType: selectData.forSale.Laptops.Type,
        itemProcessor: selectData.forSale.Laptops.processor,
        itemOperatingSystem: selectData.forSale.Laptops.OperatingSystem,
        itemCondition: selectData.forSale.Laptops.Condition,
        itemScreenSize: selectData.forSale.Laptops.ScreenSize,
        itemBrand: selectData.forSale.Laptops.Brand,
        itemColour: selectData.forSale.Laptops.Colour,
        itemWarrantyInformation: selectData.forSale.Laptops.WarrantyInformation,
        itemSearchRange: [-1, 0, 1, 5, 15, 30, 50, 100, 200],
        itemBatteryLife: selectData.forSale.Laptops.BatteryLife,
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
      // Perform any action here after 5 seconds of inactivity
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
    adCnt != null && (
      <>
        <FilterOptionWrapper>Main Filter</FilterOptionWrapper>
        <SingleSelection
          data={selectData.forSale.Laptops.SearchWithin}
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
          data={selectData.forSale.Laptops.Condition}
          placeholder="Select Item Condition"
          value={filter.itemCondition}
          onChange={(value) =>
            setFilter((prev) => ({ ...prev, itemCondition: value }))
          }
          type="itemCondition"
          countList={adCnt.itemCondition}
        />

        <MultiSelection
          data={selectData.forSale.Laptops.Type}
          placeholder="Select Item Type"
          value={filter.type}
          onChange={(value) => setFilter((prev) => ({ ...prev, type: value }))}
          type="itemType"
          countList={adCnt.itemType}
        />
        {isAdvancedFilter && (
          <>
            <FilterOptionWrapper>Advanced Filter</FilterOptionWrapper>
            <MultiSelection
              data={selectData.forSale.Laptops.Brand}
              placeholder="Select Brand"
              value={filter.brand}
              onChange={(value) =>
                setFilter((prev) => ({ ...prev, brand: value }))
              }
              type="itemBrand"
              countList={adCnt.itemBrand}
            />
            <MultiSelection
              data={selectData.forSale.Laptops.ramSize}
              placeholder="Select Ram Size"
              value={filter.ramSize}
              onChange={(value) =>
                setFilter((prev) => ({ ...prev, ramSize: value }))
              }
              type="itemRamSize"
              countList={adCnt.itemRamSize}
            />
            <MultiSelection
              data={selectData.forSale.Laptops.processor}
              placeholder="Select Processor"
              value={filter.processor}
              onChange={(value) =>
                setFilter((prev) => ({ ...prev, processor: value }))
              }
              type="itemProcessor"
              countList={adCnt.itemProcessor}
            />
            <MultiSelection
              data={selectData.forSale.Laptops.ScreenSize}
              placeholder="Select Screen Size"
              value={filter.screenSize}
              onChange={(value) =>
                setFilter((prev) => ({ ...prev, screenSize: value }))
              }
              type="screenSize"
              countList={adCnt.screenSize}
            />
            <MultiSelection
              data={selectData.forSale.Laptops.StorageCapacity}
              placeholder="Select Storage Capacity"
              value={filter.storageCapacity}
              onChange={(value) =>
                setFilter((prev) => ({ ...prev, storageCapacity: value }))
              }
              type="itemStorageCapacity"
              countList={adCnt.itemStorageCapacity}
              direction="top"
            />
            <MultiSelection
              data={selectData.forSale.Laptops.OperatingSystem}
              placeholder="Select Operating System"
              value={filter.operatingSystem}
              onChange={(value) =>
                setFilter((prev) => ({ ...prev, operatingSystem: value }))
              }
              type="itemOperatingSystem"
              countList={adCnt.itemOperatingSystem}
              direction="top"
            />
            <MultiSelection
              data={selectData.forSale.Laptops.Colour}
              placeholder="Select Colour"
              value={filter.colour}
              onChange={(value) =>
                setFilter((prev) => ({ ...prev, colour: value }))
              }
              type="itemColour"
              countList={adCnt.itemColour}
              direction="top"
            />
            <MultiSelection
              data={selectData.forSale.Laptops.WarrantyInformation}
              placeholder="Select Warranty Information"
              value={filter.warrantyInformation}
              onChange={(value) =>
                setFilter((prev) => ({ ...prev, warrantyInformation: value }))
              }
              type="itemWarrantyInformation"
              countList={adCnt.itemWarrantyInformation}
              direction="top"
            />
            <MultiSelection
              data={selectData.forSale.Laptops.SellerRating}
              placeholder="Select Seller Rating"
              value={filter.sellerRating}
              onChange={(value) =>
                setFilter((prev) => ({ ...prev, sellerRating: value }))
              }
              type="itemSellerRating"
              countList={adCnt.itemSellerRating}
              direction="top"
            />
            <MultiSelection
              data={selectData.forSale.Laptops.BatteryLife}
              placeholder="Select Battery Life"
              value={filter.batteryLife}
              onChange={(value) =>
                setFilter((prev) => ({ ...prev, batteryLife: value }))
              }
              type="itemBatteryLife"
              countList={adCnt.itemBatteryLife}
              direction="top"
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
