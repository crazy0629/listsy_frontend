import React, { useEffect, useState } from "react";

import * as Styled from "../../main.styles";
import { useRouter } from "next/router";
import axios from "axios";
import { SERVER_URI } from "@/config";
import { selectData } from "@/modules/upload/detailsform/data-electronics";

type Props = {
  page: string;
} & React.HTMLAttributes<HTMLElement>;

const filterData = [
  { label: "All", value: "all" },
  {
    label: "Televisions",
    value: "televisions",
  },
  {
    label: "Laptops and Desktop Computers",
    value: "laptops-desktop-computers",
  },
  {
    label: "iPad, Tablets & eReaders",
    value: "ipad-tablets-ereaders",
  },
  {
    label: "Phones",
    value: "phones",
  },
  {
    label: "Gaming Consoles and Accessories",
    value: "gaming-consoles-accessories",
  },
  {
    label: "Home Theater Systems",
    value: "home-theater-systems",
  },
  {
    label: "Kitchen Appliances",
    value: "kitchen",
  },
  {
    label: "Laundry Appliances",
    value: "laundry",
  },
  {
    label: "Cleaning Appliances",
    value: "cleaning",
  },
  {
    label: "Heating, Cooling, and Air Quality",
    value: "heating-cooling-air-quality",
  },
  {
    label: "Personal Care Appliances",
    value: "personal-care",
  },
  {
    label: "Miscellaneous Appliances",
    value: "miscellaneous",
  },
  {
    label: "Cameras and Camcorders",
    value: "cameras-camcorders",
  },
  {
    label: "Portable Music Players",
    value: "portable-music-players",
  },
  {
    label: "Wearable Technology",
    value: "wearable-technology",
  },
  {
    label: "Networking Devices",
    value: "networking-devices",
  },
  {
    label: "Computer Components and Storage",
    value: "computer-components-storage",
  },
  {
    label: "Office Equipment",
    value: "office-equipment",
  },
  {
    label: "Security and Surveillance Equipment",
    value: "security-surveillance",
  },
  {
    label: "Audio Equipment",
    value: "audio-equipment",
  },
  {
    label: "Smart Home Devices",
    value: "smart-home-devices",
  },
  {
    label: "Batteries and Power Supplies",
    value: "batteries-power-supplies",
  },
];

export const ForSalePageWrapper: React.FC<Props> = ({ children, page }) => {
  const router = useRouter();
  const [adCnt, setAdCnt] = useState([]);

  useEffect(() => {
    window.addEventListener("localStorageChanged", function (e: Event) {
      getData();
    });
    getData();
  }, []);

  const getData = async () => {
    const categoryList = selectData.forSale.category;
    let address = "";
    let countryCode = "";
    let locationSelected = localStorage.getItem("locationSelected");
    if (locationSelected == "true") {
      let locationAddress = localStorage.getItem("locationAddress");
      address = locationAddress;
      countryCode = "";
    } else if (locationSelected == "false") {
      let locationAddress = localStorage.getItem("locationAddress");
      let countryCode = localStorage.getItem("locationCountryCode");
      address = locationAddress;
      countryCode = countryCode;
    }
    const adsCountData = await axios.post(
      `${SERVER_URI}/sale/getCountForEachCategory`,
      { itemCategory: categoryList, address, countryCode }
    );

    setAdCnt(adsCountData.data.countList);
  };

  return (
    <Styled.MainPageSectionWrapper>
      <Styled.FilterWrapper>
        <Styled.PostsPageFilterWrapper>
          {filterData.map((item, key) => (
            <span
              key={key}
              onClick={() => router.push(item.value)}
              className={item.value === page ? "active" : ""}
            >
              {item.label}

              {adCnt &&
                adCnt.length > 0 &&
                "  (" +
                  adCnt.filter(
                    (element) => element.itemCategory === item.label
                  )[0]?.count +
                  ")"}
            </span>
          ))}
        </Styled.PostsPageFilterWrapper>
      </Styled.FilterWrapper>
      {children}
    </Styled.MainPageSectionWrapper>
  );
};
