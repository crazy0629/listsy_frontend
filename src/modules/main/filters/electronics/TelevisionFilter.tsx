import { MultiSelection, SingleSelection } from "@/components";
import React, { useEffect, useState } from "react";
import { FilterWrapper } from "../../main.styles";
import { selectData } from "@/modules/upload/detailsform/data";
import axios from "axios";
import { SERVER_URI } from "@/config";

export const TelevisionFilter: React.FC = () => {
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
    minPrice: "",
    maxPrice: "",
  });

  const [address, setAddress] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [adCnt, setAdCnt] = useState(null);
  const [currency, setCurrency] = useState("$");

  const [isLoading, setIsLoading] = useState(false);

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
    console.log(123456, filter);
  }, [filter]);

  useEffect(() => {
    if (address == "") return;
    setIsLoading(true);
    getCount();
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
                break; // Exit the loop after the first property
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

  const getCount = async () => {
    const adsCountData = await axios.post(
      `${SERVER_URI}/sale/getCountOfEachFilter`,
      {
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
        lat: Number(localStorage.getItem("centerlat")),
        lng: Number(localStorage.getItem("centerlng")),
      }
    );
    setAdCnt(adsCountData.data);
    setIsLoading(false);
  };

  const handleMinPrice = async (e) => {
    if (
      filter.maxPrice != "" &&
      Number(e.target.value) > Number(filter.maxPrice)
    )
      return;
    setFilter((prev) => ({ ...prev, minPrice: e.target.value }));

    setIsLoading(true);
    const adsCountData = await axios.post(
      `${SERVER_URI}/sale/getCountOfEachFilter`,
      {
        minPrice: e.target.value,
        maxPrice: filter.maxPrice,
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
        lat: Number(localStorage.getItem("centerlat")),
        lng: Number(localStorage.getItem("centerlng")),
      }
    );
    setAdCnt(adsCountData.data);
    setIsLoading(false);
  };

  const handleMaxPrice = async (e) => {
    setFilter((prev) => ({ ...prev, maxPrice: e.target.value }));

    setIsLoading(true);
    const adsCountData = await axios.post(
      `${SERVER_URI}/sale/getCountOfEachFilter`,
      {
        minPrice: filter.minPrice,
        maxPrice: e.target.value,
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
        lat: Number(localStorage.getItem("centerlat")),
        lng: Number(localStorage.getItem("centerlng")),
      }
    );
    setAdCnt(adsCountData.data);
    setIsLoading(false);
  };

  const validateNumberInput = (e) => {
    const regex = /^[0-9]*$/; // Regular expression to match numbers from 0 to 9

    if (!regex.test(e.target.value)) {
      e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Remove any non-numeric characters
    }
  };

  return (
    <FilterWrapper>
      {adCnt && (
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

          {/* <MultiSelection
            data={selectData.forSale.Televisions.PriceRange}
            placeholder="Select Price Range"
            value={filter.priceRange}
            onChange={(value) =>
              setFilter((prev) => ({ ...prev, priceRange: value }))
            }
            type="itemPriceRange"
          /> */}
          <div>
            <span>{currency}</span>
            <input
              type="text"
              placeholder="min price"
              value={filter.minPrice}
              onChange={handleMinPrice}
              onInput={validateNumberInput}
            />
            <span>-</span>
            <span>{currency}</span>
            <input
              type="text"
              placeholder="max price"
              value={filter.maxPrice}
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
