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
  });

  const [address, setAddress] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [adCnt, setAdCnt] = useState([]);

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
  }, []);

  useEffect(() => {
    if (address == "") return;
    getCount();
  }, [address, countryCode]);

  const getCount = async () => {
    const adsCountData = await axios.post(
      `${SERVER_URI}/sale/getCountPerItemCondition`,
      {
        itemCategory: "Televisions",
        itemCondition: selectData.forSale.Televisions.Condition,
        address,
        countryCode,
      }
    );

    console.log(123123, adsCountData);
  };

  return (
    <FilterWrapper>
      <SingleSelection
        data={selectData.forSale.Televisions.SearchWithin}
        placeholder="Select Search Range"
        value={filter.SearchWithin}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, SearchWithin: value }))
        }
      />

      <MultiSelection
        data={selectData.forSale.Televisions.PriceRange}
        placeholder="Select Price Range"
        value={filter.priceRange}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, priceRange: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.Televisions.Condition}
        placeholder="Select Item Condition"
        value={filter.itemCondition}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, itemCondition: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.Televisions.ScreenSize}
        placeholder="Select Screen Size"
        value={filter.screenSize}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, screenSize: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.Televisions.Resolution}
        placeholder="Select Resolution"
        value={filter.resolution}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, resolution: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.Televisions.Brand}
        placeholder="Select Brand"
        value={filter.brand}
        onChange={(value) => setFilter((prev) => ({ ...prev, brand: value }))}
      />
      <MultiSelection
        data={selectData.forSale.Televisions.SmartTV}
        placeholder="Select Smart TV"
        value={filter.smartTV}
        onChange={(value) => setFilter((prev) => ({ ...prev, smartTV: value }))}
      />
      <MultiSelection
        data={selectData.forSale.Televisions.Colour}
        placeholder="Select Colour"
        value={filter.colour}
        onChange={(value) => setFilter((prev) => ({ ...prev, colour: value }))}
      />
      <MultiSelection
        data={selectData.forSale.Televisions.WarrantyInformation}
        placeholder="Select Warranty Information"
        value={filter.warrantyInformation}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, warrantyInformation: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.Televisions.SellerRating}
        placeholder="Select Sellor Rating"
        value={filter.sellerRating}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, sellerRating: value }))
        }
      />
    </FilterWrapper>
  );
};
