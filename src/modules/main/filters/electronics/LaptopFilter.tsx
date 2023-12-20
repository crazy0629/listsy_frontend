import { MultiSelection, SingleSelection } from "@/components";
import React, { useEffect, useRef, useState } from "react";
import { FilterWrapper } from "../../main.styles";
import { selectData } from "@/modules/upload/detailsform/data";
import axios from "axios";
import { SERVER_URI } from "@/config";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

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
  };

  useEffect(() => {
    if (locationInfo == null) return;

    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?place_id=${locationInfo.value.place_id}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        const countryCode = data.results[0].address_components.find(
          (component) => component.types.includes("country")
        ).short_name;

        const location = data.results[0].geometry.location;
        const lat = location.lat;
        const lng = location.lng;

        setFilter((prev) => ({
          ...prev,
          selectedLocation: {
            address: locationInfo.label,
            lat,
            lng,
            countryCode,
          },
        }));

        setFilter((prev) => ({ ...prev, centerLocationSelected: true }));
      })
      .catch((error) => {
        console.error("Error fetching location info:", error);
      });
  }, [locationInfo]);

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
        const countryCode = country
          ? country.address_components.find((component) =>
              component.types.includes("country")
            ).short_name
          : null;

        fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
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
        itemSearchRange: [0, 1, 5, 15, 30, 50, 100, 200, -1],
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
    const regex = /^[0-9]*$/; // Regular expression to match numbers from 0 to 9

    if (!regex.test(e.target.value)) {
      e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Remove any non-numeric characters
    }
  };

  return (
    <FilterWrapper>
      {adCnt != null && (
        <>
          <div>
            <GooglePlacesAutocomplete
              apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}
              selectProps={{
                placeholder: "Select location here...",
                value: locationInfo,
                onChange: setLocationInfo,
              }}
            />
          </div>

          <SingleSelection
            data={selectData.forSale.Laptops.SearchWithin}
            placeholder="Select Search Range"
            value={filter.SearchWithin}
            onChange={(value) =>
              setFilter((prev) => ({ ...prev, SearchWithin: value }))
            }
            type="itemSearchRange"
            countList={adCnt.itemRangeInfo}
          />

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
            {adCnt.itemPriceRange != -1 && (
              <span>({adCnt.itemPriceRange})</span>
            )}
          </div>

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
            onChange={(value) =>
              setFilter((prev) => ({ ...prev, type: value }))
            }
            type="itemType"
            countList={adCnt.itemType}
          />
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
          />
        </>
      )}
    </FilterWrapper>
  );
};
