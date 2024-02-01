import { InputRange, MultiSelection, SingleSelection } from "@/components";
import React, { useEffect, useRef, useState } from "react";
import { FilterOptionWrapper, ShowAdvancedFilter } from "../../main.styles";
import { selectData } from "@/modules/upload/detailsform/DataList/data-electronics";
import axios from "axios";
import { SERVER_URI } from "@/config";

type Props = {
  onChange: (data: any) => void;
};

export const PhoneFilter: React.FC<Props> = ({ onChange }) => {
  const [filter, setFilter] = useState({
    SearchWithin: "",
    type: "",
    cellPhone: {
      itemCondition: [] as string[],
      networkProvider: [] as string[],
      brand: [] as string[],
      operatingSystem: [] as string[],
      screenSizeRange: [] as string[],
      memoryCapacity: [] as string[],
      cameraResolution: [] as string[],
      batteryCapacity: [] as string[],
      colour: [] as string[],
      warrantyInformation: [] as string[],
      sellerRating: [] as string[],
    },
    cellPhoneAccessories: {
      priceRange: [] as string[],
      accessoryType: [] as string[],
      itemCondition: [] as string[],
      warrantyInformation: [] as string[],
      sellerRating: [] as string[],
    },
    landLine: {
      priceRange: [] as string[],
      landLineType: [] as string[],
      itemCondition: [] as string[],
      brand: [] as string[],
      warrantyInformation: [] as string[],
      sellerRating: [] as string[],
    },
    walkieTalkies: {
      priceRange: [] as string[],
      walkieTalkiesType: [] as string[],
      itemCondition: [] as string[],
      brand: [] as string[],
      warrantyInformation: [] as string[],
      sellerRating: [] as string[],
    },
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

  const donetyping = async () => {
    setIsLoading(true);
    const adsCountData = await axios.post(
      `${SERVER_URI}/sale/getCountOfEachFilter`,
      {
        minPrice: minPrice,
        maxPrice: maxPrice,
        itemCategory: "Phones",
        itemType: selectData.forSale.Phone.Type,
        itemSearchRange: [0, 1, 5, 15, 30, 50, 100, 200, -1],
        itemCondition:
          filter.type == "Cell Phones"
            ? selectData.forSale.Phone.CellPhones.Condition
            : filter.type == "Cell Phone Accessories"
            ? selectData.forSale.Phone.CellPhoneAccessories.Condition
            : filter.type == "Landlines"
            ? selectData.forSale.Phone.LandLine.Condition
            : filter.type == "Walkie Talkies"
            ? selectData.forSale.Phone.WalkieTalkies.Condition
            : [],
        itemBrand:
          filter.type == "Cell Phones"
            ? selectData.forSale.Phone.CellPhones.Brand
            : filter.type == "Landlines"
            ? selectData.forSale.Phone.LandLine.Brand
            : filter.type == "Walkie Talkies"
            ? selectData.forSale.Phone.WalkieTalkies.Brand
            : [],
        itemWarrantyInformation:
          filter.type == "Cell Phones"
            ? selectData.forSale.Phone.CellPhones.WarrantyInformation
            : filter.type == "Cell Phone Accessories"
            ? selectData.forSale.Phone.CellPhoneAccessories.WarrantyInformation
            : filter.type == "Landlines"
            ? selectData.forSale.Phone.LandLine.WarrantyInformation
            : filter.type == "Walkie Talkies"
            ? selectData.forSale.Phone.WalkieTalkies.WarrantyInformation
            : [],
        itemSellerRating:
          filter.type == "Cell Phones"
            ? selectData.forSale.Phone.CellPhones.SellerRating
            : filter.type == "Cell Phone Accessories"
            ? selectData.forSale.Phone.CellPhoneAccessories.SellerRating
            : filter.type == "Landlines"
            ? selectData.forSale.Phone.LandLine.SellerRating
            : filter.type == "Walkie Talkies"
            ? selectData.forSale.Phone.WalkieTalkies.SellerRating
            : [],
        itemWalkieTalkiesType:
          filter.type == "Walkie Talkies"
            ? selectData.forSale.Phone.WalkieTalkies.LandLineType
            : [],
        itemLandLineType:
          filter.type == "Landlines"
            ? selectData.forSale.Phone.LandLine.LandLineType
            : [],
        itemAccessoryType:
          filter.type == "Cell Phone Accessories"
            ? selectData.forSale.Phone.CellPhoneAccessories.AccessoryType
            : [],
        itemOperatingSystem:
          filter.type == "Cell Phones"
            ? selectData.forSale.Phone.CellPhones.OperatingSystem
            : [],
        itemColour:
          filter.type == "Cell Phones"
            ? selectData.forSale.Phone.CellPhones.Colour
            : [],
        itemNetworkProvider:
          filter.type == "Cell Phones"
            ? selectData.forSale.Phone.CellPhones.NetworkProvider
            : [],
        itemScreenSizeRange:
          filter.type == "Cell Phones"
            ? selectData.forSale.Phone.CellPhones.ScreenSizeRange
            : [],
        itemMemoryCapacity:
          filter.type == "Cell Phones"
            ? selectData.forSale.Phone.CellPhones.MemoryCapacity
            : [],
        itemCameraResolution:
          filter.type == "Cell Phones"
            ? selectData.forSale.Phone.CellPhones.CameraResolution
            : [],
        itemBatteryCapacity:
          filter.type == "Cell Phones"
            ? selectData.forSale.Phone.CellPhones.BatteryCapacity
            : [],
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
      type: filter.type,
      centerLocationSelected: filter.centerLocationSelected,
      selectedLocation: filter.selectedLocation,
    };
    if (filter.type == "Cell Phones") {
      filterObj = {
        ...filterObj,
        ...filter.cellPhone,
      };
    } else if (filter.type == "Cell Phone Accessories") {
      filterObj = {
        ...filterObj,
        ...filter.cellPhoneAccessories,
      };
    } else if (filter.type == "Landlines") {
      filterObj = {
        ...filterObj,
        ...filter.landLine,
      };
    } else if (filter.type == "Walkie Talkies") {
      filterObj = {
        ...filterObj,
        ...filter.walkieTalkies,
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
          data={selectData.forSale.Phone.SearchWithin}
          placeholder="Select Search Range"
          value={filter.SearchWithin}
          onChange={(value) =>
            setFilter((prev) => ({ ...prev, SearchWithin: value }))
          }
          type="itemSearchRange"
          countList={adCnt?.itemRangeInfo}
        />
        <SingleSelection
          data={selectData.forSale.Phone.Type}
          placeholder="Select Type"
          value={filter.type}
          onChange={(value) => setFilter((prev) => ({ ...prev, type: value }))}
          type="itemType"
          countList={adCnt?.itemType}
        />
        {filter.type == "Cell Phones" && (
          <>
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
              data={selectData.forSale.Phone.CellPhones.Condition}
              placeholder="Select Item Condition"
              value={filter.cellPhone.itemCondition}
              onChange={(value) =>
                setFilter((prev) => ({
                  ...prev,
                  cellPhone: { ...prev.cellPhone, itemCondition: value },
                }))
              }
              type="itemCondition"
              countList={adCnt?.itemCondition}
            />
            {isAdvancedFilter && (
              <>
                <FilterOptionWrapper>Advanced Filter</FilterOptionWrapper>
                <MultiSelection
                  data={selectData.forSale.Phone.CellPhones.NetworkProvider}
                  placeholder="Select Network Provider"
                  value={filter.cellPhone.networkProvider}
                  onChange={(value) =>
                    setFilter((prev) => ({
                      ...prev,
                      cellPhone: { ...prev.cellPhone, networkProvider: value },
                    }))
                  }
                  type="itemNetworkProvider"
                  countList={adCnt?.itemNetworkProvider}
                />
                <MultiSelection
                  data={selectData.forSale.Phone.CellPhones.Brand}
                  placeholder="Select Brand"
                  value={filter.cellPhone.brand}
                  onChange={(value) =>
                    setFilter((prev) => ({
                      ...prev,
                      cellPhone: { ...prev.cellPhone, brand: value },
                    }))
                  }
                  type="itemBrand"
                  countList={adCnt?.itemBrand}
                />
                <MultiSelection
                  data={selectData.forSale.Phone.CellPhones.OperatingSystem}
                  placeholder="Select Operating System"
                  value={filter.cellPhone.operatingSystem}
                  onChange={(value) =>
                    setFilter((prev) => ({
                      ...prev,
                      cellPhone: { ...prev.cellPhone, operatingSystem: value },
                    }))
                  }
                  type="itemOperatingSystem"
                  countList={adCnt?.itemOperatingSystem}
                />
                <MultiSelection
                  data={selectData.forSale.Phone.CellPhones.ScreenSizeRange}
                  placeholder="Select ScreenSize Range"
                  value={filter.cellPhone.screenSizeRange}
                  onChange={(value) =>
                    setFilter((prev) => ({
                      ...prev,
                      cellPhone: { ...prev.cellPhone, screenSizeRange: value },
                    }))
                  }
                  type="itemScreenSizeRange"
                  countList={adCnt?.itemScreenSizeRange}
                />
                <MultiSelection
                  data={selectData.forSale.Phone.CellPhones.MemoryCapacity}
                  placeholder="Select Memory Capacity"
                  value={filter.cellPhone.memoryCapacity}
                  onChange={(value) =>
                    setFilter((prev) => ({
                      ...prev,
                      cellPhone: { ...prev.cellPhone, memoryCapacity: value },
                    }))
                  }
                  type="itemMemoryCapacity"
                  countList={adCnt?.itemMemoryCapacity}
                />
                <MultiSelection
                  data={selectData.forSale.Phone.CellPhones.CameraResolution}
                  placeholder="Select Camera Resolution"
                  value={filter.cellPhone.cameraResolution}
                  onChange={(value) =>
                    setFilter((prev) => ({
                      ...prev,
                      cellPhone: { ...prev.cellPhone, cameraResolution: value },
                    }))
                  }
                  type="itemCameraResolution"
                  countList={adCnt?.itemCameraResolution}
                />
                <MultiSelection
                  data={selectData.forSale.Phone.CellPhones.BatteryCapacity}
                  placeholder="Select Battery Capacity"
                  value={filter.cellPhone.batteryCapacity}
                  onChange={(value) =>
                    setFilter((prev) => ({
                      ...prev,
                      cellPhone: { ...prev.cellPhone, batteryCapacity: value },
                    }))
                  }
                  type="itemBatteryCapacity"
                  countList={adCnt?.itemBatteryCapacity}
                  direction="top"
                />
                <MultiSelection
                  data={selectData.forSale.Phone.CellPhones.Colour}
                  placeholder="Select Colour"
                  value={filter.cellPhone.colour}
                  onChange={(value) =>
                    setFilter((prev) => ({
                      ...prev,
                      cellPhone: { ...prev.cellPhone, colour: value },
                    }))
                  }
                  type="itemColour"
                  countList={adCnt?.itemColour}
                  direction="top"
                />
                <MultiSelection
                  data={selectData.forSale.Phone.CellPhones.WarrantyInformation}
                  placeholder="Select Warranty Information"
                  value={filter.cellPhone.warrantyInformation}
                  onChange={(value) =>
                    setFilter((prev) => ({
                      ...prev,
                      cellPhone: {
                        ...prev.cellPhone,
                        warrantyInformation: value,
                      },
                    }))
                  }
                  type="itemWarrantyInformation"
                  countList={adCnt?.itemWarrantyInformation}
                  direction="top"
                />
                <MultiSelection
                  data={selectData.forSale.Phone.CellPhones.SellerRating}
                  placeholder="Select Seller Rating"
                  value={filter.cellPhone.sellerRating}
                  onChange={(value) =>
                    setFilter((prev) => ({
                      ...prev,
                      cellPhone: { ...prev.cellPhone, sellerRating: value },
                    }))
                  }
                  type="itemSellerRating"
                  countList={adCnt?.itemSellerRating}
                  direction="top"
                />
              </>
            )}
          </>
        )}
        {filter.type == "Cell Phone Accessories" && (
          <>
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
              data={selectData.forSale.Phone.CellPhoneAccessories.AccessoryType}
              placeholder="Select Accessory Type"
              value={filter.cellPhoneAccessories.accessoryType}
              onChange={(value) =>
                setFilter((prev) => ({
                  ...prev,
                  cellPhoneAccessories: {
                    ...prev.cellPhoneAccessories,
                    accessoryType: value,
                  },
                }))
              }
              type="itemAccessoryType"
              countList={adCnt?.itemAccessoryType}
            />
            <MultiSelection
              data={selectData.forSale.Phone.CellPhoneAccessories.Condition}
              placeholder="Select Item Condition"
              value={filter.cellPhoneAccessories.itemCondition}
              onChange={(value) =>
                setFilter((prev) => ({
                  ...prev,
                  cellPhoneAccessories: {
                    ...prev.cellPhoneAccessories,
                    itemCondition: value,
                  },
                }))
              }
              type="itemCondition"
              countList={adCnt?.itemCondition}
            />
            {isAdvancedFilter && (
              <>
                <FilterOptionWrapper>Advanced Filter</FilterOptionWrapper>
                <MultiSelection
                  data={
                    selectData.forSale.Phone.CellPhoneAccessories
                      .WarrantyInformation
                  }
                  placeholder="Select Warranty Information"
                  value={filter.cellPhoneAccessories.warrantyInformation}
                  onChange={(value) =>
                    setFilter((prev) => ({
                      ...prev,
                      cellPhoneAccessories: {
                        ...prev.cellPhoneAccessories,
                        warrantyInformation: value,
                      },
                    }))
                  }
                  type="itemWarrantyInformation"
                  countList={adCnt?.itemWarrantyInformation}
                />
                <MultiSelection
                  data={
                    selectData.forSale.Phone.CellPhoneAccessories.SellerRating
                  }
                  placeholder="Select Seller Rating"
                  value={filter.cellPhoneAccessories.sellerRating}
                  onChange={(value) =>
                    setFilter((prev) => ({
                      ...prev,
                      cellPhoneAccessories: {
                        ...prev.cellPhoneAccessories,
                        sellerRating: value,
                      },
                    }))
                  }
                  type="itemSellerRating"
                  countList={adCnt?.itemSellerRating}
                />
              </>
            )}
          </>
        )}
        {filter.type == "Landlines" && (
          <>
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
              data={selectData.forSale.Phone.LandLine.Condition}
              placeholder="Select Item Condition"
              value={filter.landLine.itemCondition}
              onChange={(value) =>
                setFilter((prev) => ({
                  ...prev,
                  landLine: {
                    ...prev.landLine,
                    itemCondition: value,
                  },
                }))
              }
              type="itemCondition"
              countList={adCnt?.itemCondition}
            />
            {isAdvancedFilter && (
              <>
                <FilterOptionWrapper>Advanced Filter</FilterOptionWrapper>
                <MultiSelection
                  data={selectData.forSale.Phone.LandLine.LandLineType}
                  placeholder="Select LandLine Type"
                  value={filter.landLine.landLineType}
                  onChange={(value) =>
                    setFilter((prev) => ({
                      ...prev,
                      landLine: {
                        ...prev.landLine,
                        landLineType: value,
                      },
                    }))
                  }
                  type="itemLandLineType"
                  countList={adCnt?.itemLandLineType}
                />

                <MultiSelection
                  data={selectData.forSale.Phone.LandLine.Brand}
                  placeholder="Select Brand"
                  value={filter.landLine.brand}
                  onChange={(value) =>
                    setFilter((prev) => ({
                      ...prev,
                      landLine: {
                        ...prev.landLine,
                        brand: value,
                      },
                    }))
                  }
                  type="itemBrand"
                  countList={adCnt?.itemBrand}
                />
                <MultiSelection
                  data={selectData.forSale.Phone.LandLine.WarrantyInformation}
                  placeholder="Select Warranty Information"
                  value={filter.landLine.warrantyInformation}
                  onChange={(value) =>
                    setFilter((prev) => ({
                      ...prev,
                      landLine: {
                        ...prev.landLine,
                        warrantyInformation: value,
                      },
                    }))
                  }
                  type="itemWarrantyInformation"
                  countList={adCnt?.itemWarrantyInformation}
                />
                <MultiSelection
                  data={selectData.forSale.Phone.LandLine.SellerRating}
                  placeholder="Select Seller Rating"
                  value={filter.landLine.sellerRating}
                  onChange={(value) =>
                    setFilter((prev) => ({
                      ...prev,
                      landLine: {
                        ...prev.landLine,
                        sellerRating: value,
                      },
                    }))
                  }
                  type="itemSellerRating"
                  countList={adCnt?.itemSellerRating}
                />
              </>
            )}
          </>
        )}
        {filter.type == "Walkie Talkies" && (
          <>
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
              data={selectData.forSale.Phone.WalkieTalkies.Condition}
              placeholder="Select Item Condition"
              value={filter.walkieTalkies.itemCondition}
              onChange={(value) =>
                setFilter((prev) => ({
                  ...prev,
                  walkieTalkies: {
                    ...prev.walkieTalkies,
                    itemCondition: value,
                  },
                }))
              }
              type="itemCondition"
              countList={adCnt?.itemCondition}
            />
            {isAdvancedFilter && (
              <>
                <FilterOptionWrapper>Advanced Filter</FilterOptionWrapper>
                <MultiSelection
                  data={selectData.forSale.Phone.WalkieTalkies.LandLineType}
                  placeholder="Select walkieTalkies Type"
                  value={filter.walkieTalkies.walkieTalkiesType}
                  onChange={(value) =>
                    setFilter((prev) => ({
                      ...prev,
                      walkieTalkies: {
                        ...prev.walkieTalkies,
                        walkieTalkiesType: value,
                      },
                    }))
                  }
                  type="itemWalkieTalkiesType"
                  countList={adCnt?.itemWalkieTalkiesType}
                />
                <MultiSelection
                  data={selectData.forSale.Phone.WalkieTalkies.Brand}
                  placeholder="Select Brand"
                  value={filter.walkieTalkies.brand}
                  onChange={(value) =>
                    setFilter((prev) => ({
                      ...prev,
                      walkieTalkies: {
                        ...prev.walkieTalkies,
                        brand: value,
                      },
                    }))
                  }
                  type="itemBrand"
                  countList={adCnt?.itemBrand}
                />
                <MultiSelection
                  data={
                    selectData.forSale.Phone.WalkieTalkies.WarrantyInformation
                  }
                  placeholder="Select Warranty Information"
                  value={filter.walkieTalkies.warrantyInformation}
                  onChange={(value) =>
                    setFilter((prev) => ({
                      ...prev,
                      walkieTalkies: {
                        ...prev.walkieTalkies,
                        warrantyInformation: value,
                      },
                    }))
                  }
                  type="itemWarrantyInformation"
                  countList={adCnt?.itemWarrantyInformation}
                />
                <MultiSelection
                  data={selectData.forSale.Phone.WalkieTalkies.SellerRating}
                  placeholder="Select Seller Rating"
                  value={filter.walkieTalkies.sellerRating}
                  onChange={(value) =>
                    setFilter((prev) => ({
                      ...prev,
                      walkieTalkies: {
                        ...prev.walkieTalkies,
                        sellerRating: value,
                      },
                    }))
                  }
                  type="itemSellerRating"
                  countList={adCnt?.itemSellerRating}
                />
              </>
            )}
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
