import { MultiSelection, SingleSelection } from "@/components";
import React, { useEffect, useRef, useState } from "react";
import { FilterWrapper } from "../../main.styles";
import { selectData } from "@/modules/upload/detailsform/data";
import axios from "axios";
import { SERVER_URI } from "@/config";

type Props = {
  onChange: (data: any) => void;
};

export const TelevisionFilter: React.FC<Props> = ({ onChange }) => {
  const [filter, setFilter] = useState({
    SearchWithin: "",
    priceRange: [] as string[],
    itemCondition: [] as string[],
    screenSize: [] as string[],
    resolution: [] as string[],
    brand: [] as string[],
    smartTV: [] as string[],
    colour: [] as string[],
    warrantyInformation: [] as string[],
    sellerRating: [] as string[],
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
        itemCategory: "Televisions",
        itemSellerRating: selectData.forSale.Televisions.SellerRating,
        itemCondition: selectData.forSale.Televisions.Condition,
        itemScreenSize: selectData.forSale.Televisions.ScreenSize,
        itemResolution: selectData.forSale.Televisions.Resolution,
        itemBrand: selectData.forSale.Televisions.Brand,
        itemSmartTV: selectData.forSale.Televisions.SmartTV,
        itemColour: selectData.forSale.Televisions.Colour,
        itemWarrantyInformation:
          selectData.forSale.Televisions.WarrantyInformation,
        itemSearchRange: [0, 1, 5, 15, 30, 50, 100, 200, -1],
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
          <SingleSelection
            data={selectData.forSale.Televisions.SearchWithin}
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
            data={selectData.forSale.Televisions.Condition}
            placeholder="Select Item Condition"
            value={filter.itemCondition}
            onChange={(value) =>
              setFilter((prev) => ({ ...prev, itemCondition: value }))
            }
            type="itemCondition"
            countList={adCnt.itemCondition}
          />
          <MultiSelection
            data={selectData.forSale.Televisions.ScreenSize}
            placeholder="Select Screen Size"
            value={filter.screenSize}
            onChange={(value) =>
              setFilter((prev) => ({ ...prev, screenSize: value }))
            }
            type="screenSize"
            countList={adCnt.screenSize}
          />
          <MultiSelection
            data={selectData.forSale.Televisions.Resolution}
            placeholder="Select Resolution"
            value={filter.resolution}
            onChange={(value) =>
              setFilter((prev) => ({ ...prev, resolution: value }))
            }
            type="itemResolution"
            countList={adCnt.itemResolution}
          />
          <MultiSelection
            data={selectData.forSale.Televisions.Brand}
            placeholder="Select Brand"
            value={filter.brand}
            onChange={(value) =>
              setFilter((prev) => ({ ...prev, brand: value }))
            }
            type="itemBrand"
            countList={adCnt.itemBrand}
          />
          <MultiSelection
            data={selectData.forSale.Televisions.SmartTV}
            placeholder="Select Smart TV"
            value={filter.smartTV}
            onChange={(value) =>
              setFilter((prev) => ({ ...prev, smartTV: value }))
            }
            type="itemSmartTV"
            countList={adCnt.itemSmartTV}
          />
          <MultiSelection
            data={selectData.forSale.Televisions.Colour}
            placeholder="Select Colour"
            value={filter.colour}
            onChange={(value) =>
              setFilter((prev) => ({ ...prev, colour: value }))
            }
            type="itemColour"
            countList={adCnt.itemColour}
          />
          <MultiSelection
            data={selectData.forSale.Televisions.WarrantyInformation}
            placeholder="Select Warranty Information"
            value={filter.warrantyInformation}
            onChange={(value) =>
              setFilter((prev) => ({ ...prev, warrantyInformation: value }))
            }
            type="itemWarrantyInformation"
            countList={adCnt.itemWarrantyInformation}
          />
          <MultiSelection
            data={selectData.forSale.Televisions.SellerRating}
            placeholder="Select Sellor Rating"
            value={filter.sellerRating}
            onChange={(value) =>
              setFilter((prev) => ({ ...prev, sellerRating: value }))
            }
            type="itemSellerRating"
            countList={adCnt.itemSellerRating}
          />
        </>
      )}
    </FilterWrapper>
  );
};
