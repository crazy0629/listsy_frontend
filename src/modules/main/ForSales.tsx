import React, { useEffect, useRef, useState } from "react";
import * as Styled from "./main.styles";
import { CardItem } from "@/components";
import axios from "axios";
import { SERVER_URI } from "@/config";
import { toast } from "react-toastify";
import InfiniteScroll from "react-infinite-scroll-component";
import { selectData } from "../upload/detailsform/data-electronics";
import * as Filter from "./filters/electronics";
import { useRouter } from "next/router";

type ForSalesProps = {
  page?: string;
};

export const SalesPageSection: React.FC<ForSalesProps> = ({ page }) => {
  const [getIndex, setGetIndex] = useState(0);
  const [data, setData] = useState<any>([]);
  const [hasMore, setHasMore] = useState(true);
  const [filter, setFilter] = useState({
    itemCategory: "All",
  });

  const [address, setAddress] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [adCnt, setAdCnt] = useState([]);
  const router = useRouter();

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
  });

  const handleCategoryClicked = (item: any) => {
    setFilter({ itemCategory: item.label });
    router.push(item.value);
  };

  const getData = async (index: number) => {
    const categoryList = selectData.forSale.category;

    const adsCountData = await axios.post(
      `${SERVER_URI}/sale/getCountForEachCategory`,
      { itemCategory: categoryList, address, countryCode }
    );

    setAdCnt(adsCountData.data.countList);

    const tempFilter = filterData.filter((f) => f.value === page)[0].label;
    const res = await axios.post(`${SERVER_URI}/sale/getForSaleAds`, {
      ...filter,
      itemCategory: tempFilter,
      index,
      address,
      countryCode,
    });
    if (res.data.success) {
      if (index > 0) {
        setData((prev: any) => [...prev, ...res.data.data]);
      } else {
        setData([...res.data.data]);
      }
      if (res.data.data.length < 50) {
        setHasMore(false);
      }
      setGetIndex((prev) => prev + 1);
    } else {
      toast.error(res.data.message);
    }
  };

  const subFormChanged = (data) => {
    setFilter((prev) => ({ ...prev, ...data }));
  };

  const filterData = [
    { label: "All", value: "all", comp: <></> },
    {
      label: "Televisions",
      value: "televisions",
      comp: <Filter.TelevisionFilter onChange={subFormChanged} />,
    },
    {
      label: "Laptops and Desktop Computers",
      value: "laptops-desktop-computers",
      comp: <Filter.LapTopFilter onChange={subFormChanged} />,
    },
    {
      label: "iPad, Tablets & eReaders",
      value: "ipad-tablets-ereaders",
      comp: <Filter.IpadFilter onChange={subFormChanged} />,
    },
    {
      label: "Phones",
      value: "phones",
      comp: <Filter.PhoneFilter onChange={subFormChanged} />,
    },
    {
      label: "Gaming Consoles and Accessories",
      value: "gaming-consoles-accessories",
      comp: <Filter.GamingConsoleFilter onChange={subFormChanged} />,
    },
    {
      label: "Home Theater Systems",
      value: "home-theater-systems",
      comp: <Filter.TheaterSystemFilter onChange={subFormChanged} />,
    },
    {
      label: "Kitchen Appliances",
      value: "kitchen",
      comp: <Filter.KitchenFilter onChange={subFormChanged} />,
    },
    {
      label: "Laundry Appliances",
      value: "laundry",
      comp: <Filter.LaundryFilter onChange={subFormChanged} />,
    },
    {
      label: "Cleaning Appliances",
      value: "cleaning",
      comp: <Filter.CleaningFilter onChange={subFormChanged} />,
    },
    {
      label: "Heating, Cooling, and Air Quality",
      value: "heating-cooling-air-quality",
      comp: <Filter.HeatingFilter onChange={subFormChanged} />,
    },
    {
      label: "Personal Care Appliances",
      value: "personal-care",
      comp: <Filter.PersonalCareFilter onChange={subFormChanged} />,
    },
    {
      label: "Miscellaneous Appliances",
      value: "miscellaneous",
      comp: <Filter.MiscellaneousFilter onChange={subFormChanged} />,
    },
    {
      label: "Cameras and Camcorders",
      value: "cameras-camcorders",
      comp: <Filter.CameraFilter onChange={subFormChanged} />,
    },
    {
      label: "Portable Music Players",
      value: "portable-music-players",
      comp: <Filter.MusicFilter onChange={subFormChanged} />,
    },
    {
      label: "Wearable Technology",
      value: "wearable-technology",
      comp: <Filter.WearableFilter onChange={subFormChanged} />,
    },
    {
      label: "Networking Devices",
      value: "networking-devices",
      comp: <Filter.NetworkingFilter onChange={subFormChanged} />,
    },
    {
      label: "Computer Components and Storage",
      value: "computer-components-storage",
      comp: <Filter.ComputerComponentFilter onChange={subFormChanged} />,
    },
    {
      label: "Office Equipment",
      value: "office-equipment",
      comp: <Filter.OfficeFilter onChange={subFormChanged} />,
    },
    {
      label: "Security and Surveillance Equipment",
      value: "security-surveillance",
      comp: <Filter.SecurityFilter onChange={subFormChanged} />,
    },
    {
      label: "Audio Equipment",
      value: "audio-equipment",
      comp: <Filter.AudioFilter onChange={subFormChanged} />,
    },
    {
      label: "Smart Home Devices",
      value: "smart-home-devices",
      comp: <Filter.HomeDeviceFilter onChange={subFormChanged} />,
    },
    {
      label: "Batteries and Power Supplies",
      value: "batteries-power-supplies",
      comp: <Filter.BatteryFilter onChange={subFormChanged} />,
    },
  ];

  useEffect(() => {
    if (address == "") return;
    getData(0);
  }, [filter, filter.itemCategory]);

  useEffect(() => {
    if (address == "") return;
    setGetIndex(0);
    setFilter((prev) => ({ ...prev, itemCategory: "All" }));
    getData(0);
  }, [address, countryCode]);

  return (
    <Styled.MainPageSectionWrapper>
      <Styled.FilterWrapper>
        <Styled.PostsPageFilterWrapper>
          {filterData.map((item, key) => (
            <span
              key={key}
              onClick={() => handleCategoryClicked(item)}
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
      <Styled.MainGridWrapper>
        {data.length > 0 ? (
          <InfiniteScroll
            dataLength={data.length}
            next={() => getData(getIndex)}
            hasMore={hasMore}
            endMessage={<h4></h4>}
            scrollableTarget="community-list"
            className={page !== "all" ? "filtered" : ""}
            loader={<h4>Loading...</h4>}
          >
            {data.length > 0 &&
              data.map((item: any, key: number) => (
                <CardItem
                  id={item.adId?._id}
                  key={key}
                  type={"sale"}
                  link={item.adId?.adFileName}
                  postDate={item.adId?.uploadDate}
                  price={item.price}
                  priceUnit={item.priceUnit}
                  reviewCount={item.userId?.reviewCount}
                  reviewMark={item.userId?.reviewMark}
                  subtitle={item.subTitle}
                  title={item.title}
                  address={item.address}
                  userAvatar={item.userId?.avatar}
                  firstName={item.userId?.firstName}
                  lastName={item.userId?.lastName}
                  viewCount={item.viewCount}
                  duration={item.adId?.duration}
                />
              ))}
          </InfiniteScroll>
        ) : (
          <div className="no-data">No Data</div>
        )}
        {page !== "all" && (
          <Styled.FilterSection>
            {filterData.filter((f) => f.value === page)[0].comp}
          </Styled.FilterSection>
        )}
      </Styled.MainGridWrapper>
    </Styled.MainPageSectionWrapper>
  );
};
