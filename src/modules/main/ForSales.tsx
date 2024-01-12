import React, { useEffect, useRef, useState } from "react";
import * as Styled from "./main.styles";
import { CardItem, SingleSelection } from "@/components";
import axios from "axios";
import { SERVER_URI } from "@/config";
import { toast } from "react-toastify";
import InfiniteScroll from "react-infinite-scroll-component";
import { selectData } from "../upload/detailsform/data";
import { TelevisionFilter } from "./filters/electronics/TelevisionFilter";
import { LapTopFilter } from "./filters/electronics/LaptopFilter";
import { IpadFilter } from "./filters/electronics/IpadFilter";
import { TheaterSystemFilter } from "./filters/electronics/TheaterSystemFilter";
import { KitchenFilter } from "./filters/electronics/KitchenFilter";
import { LaundryFilter } from "./filters/electronics/LaundryFilter";
import { CleaningFilter } from "./filters/electronics/CleaningFilter";
import { HeatingFilter } from "./filters/electronics/HeatingFilter";
import { PersonalCareFilter } from "./filters/electronics/PersonalCareFilter";
import { MiscellaneousFilter } from "./filters/electronics/MiscellaneousFilter";
import { CameraFilter } from "./filters/electronics/CameraFilter";
import { MusicFilter } from "./filters/electronics/MusicFilter";
import { WearableFilter } from "./filters/electronics/WearableFilter";
import { NetworkingFilter } from "./filters/electronics/NetworkingFilter";
import { ComputerComponentFilter } from "./filters/electronics/ComputerComponentsFilter";
import { OfficeFilter } from "./filters/electronics/OfficeFilter";
import { SecurityFilter } from "./filters/electronics/SecurityFilter";
import { AudioFilter } from "./filters/electronics/AudioFilter";
import { HomeDeviceFilter } from "./filters/electronics/HomeDeviceFilter";
import { BatteryFilter } from "./filters/electronics/BatteryFilter";
import { GamingConsoleFilter } from "./filters/electronics/GamingConsoleFilter";
import { PhoneFilter } from "./filters/electronics/PhoneFilter";

export const SalesPageSection: React.FC = () => {
  const [getIndex, setGetIndex] = useState(0);
  const [data, setData] = useState<any>([]);
  const [hasMore, setHasMore] = useState(true);
  const [filter, setFilter] = useState({
    itemCategory: "All",
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
  });

  useEffect(() => {
    if (address == "") return;
    getData(0);
  }, [filter]);

  useEffect(() => {
    if (address == "") return;
    getData(0);
  }, [filter.itemCategory]);

  useEffect(() => {
    if (address == "") return;
    setGetIndex(0);
    setFilter((prev) => ({ ...prev, itemCategory: "All" }));
    getData(0);
  }, [address, countryCode]);

  const handleCategoryClicked = (value) => {
    setFilter({ itemCategory: value });
  };

  const getData = async (index: number) => {
    const categoryList = selectData.forSale.category;

    const adsCountData = await axios.post(
      `${SERVER_URI}/sale/getCountForEachCategory`,
      { itemCategory: categoryList, address, countryCode }
    );

    const adCnt = adsCountData.data.countList;
    setAdCnt(adsCountData.data.countList);

    const res = await axios.post(`${SERVER_URI}/sale/getForSaleAds`, {
      ...filter,
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

  const navRef = useRef(null);

  const scroll = (scrollOffset) => {
    navRef.current.scrollLeft += scrollOffset;
  };

  return (
    <Styled.MainPageSectionWrapper>
      <Styled.FilterWrapper>
        <Styled.PostsPageFilterWrapper>
          {selectData.forSale.category.map((item, key) => (
            <span
              key={key}
              onClick={() => handleCategoryClicked(item)}
              className={item === filter.itemCategory ? "active" : ""}
            >
              {item}

              {adCnt &&
                adCnt.length > 0 &&
                "  (" +
                  adCnt.filter((element) => element.itemCategory == item)[0]
                    ?.count +
                  ")"}
            </span>
          ))}
        </Styled.PostsPageFilterWrapper>
        {filter.itemCategory == "Televisions" && (
          <TelevisionFilter onChange={subFormChanged} />
        )}
        {filter.itemCategory == "Laptops and Desktop Computers" && (
          <LapTopFilter onChange={subFormChanged} />
        )}
        {filter.itemCategory == "iPad, Tablets & eReaders" && (
          <IpadFilter onChange={subFormChanged} />
        )}
        {filter.itemCategory == "Home Theater Systems" && (
          <TheaterSystemFilter />
        )}
        {filter.itemCategory == "Kitchen Appliances" && <KitchenFilter />}
        {filter.itemCategory == "Laundry Appliances" && <LaundryFilter />}
        {filter.itemCategory == "Cleaning Appliances" && <CleaningFilter />}
        {filter.itemCategory == "Heating, Cooling, and Air Quality" && (
          <HeatingFilter />
        )}
        {filter.itemCategory == "Personal Care Appliances" && (
          <PersonalCareFilter />
        )}
        {filter.itemCategory == "Miscellaneous Appliances" && (
          <MiscellaneousFilter />
        )}
        {filter.itemCategory == "Cameras and Camcorders" && <CameraFilter />}
        {filter.itemCategory == "Portable Music Players" && <MusicFilter />}
        {filter.itemCategory == "Wearable Technology" && <WearableFilter />}
        {filter.itemCategory == "Networking Devices" && <NetworkingFilter />}
        {filter.itemCategory == "Computer Components and Storage" && (
          <ComputerComponentFilter />
        )}
        {filter.itemCategory == "Office Equipment" && <OfficeFilter />}
        {filter.itemCategory == "Security and Surveillance Equipment" && (
          <SecurityFilter />
        )}
        {filter.itemCategory == "Audio Equipment" && <AudioFilter />}
        {filter.itemCategory == "Smart Home Devices" && <HomeDeviceFilter />}
        {filter.itemCategory == "Batteries and Power Supplies" && (
          <BatteryFilter />
        )}
        {filter.itemCategory == "Gaming Consoles and Accessories" && (
          <GamingConsoleFilter />
        )}
        {filter.itemCategory == "Phones" && <PhoneFilter />}
        {/* <button onClick={() => getData(0)}>Search</button> */}
      </Styled.FilterWrapper>
      <Styled.MainGridWrapper>
        <InfiniteScroll
          dataLength={data.length}
          next={() => getData(getIndex)}
          hasMore={hasMore}
          endMessage={<h4>All data is Loaded</h4>}
          scrollableTarget="community-list"
          loader={<h4>Loading...</h4>}
        >
          {data.length > 0 &&
            data.map((item: any, key: number) => (
              <CardItem
                id={item.adId._id}
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
      </Styled.MainGridWrapper>
    </Styled.MainPageSectionWrapper>
  );
};
