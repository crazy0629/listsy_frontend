import React, { useEffect, useState } from "react";
import * as Styled from "./main.styles";
import { CardItem } from "@/components";
import axios from "axios";
import { SERVER_URI } from "@/config";
import { toast } from "react-toastify";
import InfiniteScroll from "react-infinite-scroll-component";
import { selectData } from "../upload/detailsform/DataList/data-electronics";
import * as Filter from "./filters/electronics";
import { useRouter } from "next/router";
import { MdArrowLeft, MdClose } from "react-icons/md";
import { Tabs, Tab } from "react-tabs-scrollable";

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
  const [isShowFilter, setIsShowFilter] = useState(false);

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
    { label: "All", value: "/for-sale/electronics/all", comp: <></> },
    {
      label: "Televisions",
      value: "/for-sale/electronics/televisions",
      comp: <Filter.TelevisionFilter onChange={subFormChanged} />,
    },
    {
      label: "Laptops and Desktop Computers",
      value: "/for-sale/electronics/laptops-desktop-computers",
      comp: <Filter.LapTopFilter onChange={subFormChanged} />,
    },
    {
      label: "iPad, Tablets & eReaders",
      value: "/for-sale/electronics/ipad-tablets-ereaders",
      comp: <Filter.IpadFilter onChange={subFormChanged} />,
    },
    {
      label: "Phones",
      value: "/for-sale/electronics/phones",
      comp: <Filter.PhoneFilter onChange={subFormChanged} />,
    },
    {
      label: "Gaming Consoles and Accessories",
      value: "/for-sale/electronics/gaming-consoles-accessories",
      comp: <Filter.GamingConsoleFilter onChange={subFormChanged} />,
    },
    {
      label: "Home Theater Systems",
      value: "/for-sale/electronics/home-theater-systems",
      comp: <Filter.TheaterSystemFilter onChange={subFormChanged} />,
    },
    {
      label: "Kitchen Appliances",
      value: "/for-sale/appliances/kitchen",
      comp: <Filter.KitchenFilter onChange={subFormChanged} />,
    },
    {
      label: "Laundry Appliances",
      value: "/for-sale/appliances/laundry",
      comp: <Filter.LaundryFilter onChange={subFormChanged} />,
    },
    {
      label: "Cleaning Appliances",
      value: "/for-sale/appliances/cleaning",
      comp: <Filter.CleaningFilter onChange={subFormChanged} />,
    },
    {
      label: "Heating, Cooling, and Air Quality",
      value: "/for-sale/appliances/heating-cooling-air-quality",
      comp: <Filter.HeatingFilter onChange={subFormChanged} />,
    },
    {
      label: "Personal Care Appliances",
      value: "/for-sale/appliances/personal-care",
      comp: <Filter.PersonalCareFilter onChange={subFormChanged} />,
    },
    {
      label: "Miscellaneous Appliances",
      value: "/for-sale/appliances/miscellaneous",
      comp: <Filter.MiscellaneousFilter onChange={subFormChanged} />,
    },
    {
      label: "Cameras and Camcorders",
      value: "/for-sale/electronics/cameras-camcorders",
      comp: <Filter.CameraFilter onChange={subFormChanged} />,
    },
    {
      label: "Portable Music Players",
      value: "/for-sale/electronics/portable-music-players",
      comp: <Filter.MusicFilter onChange={subFormChanged} />,
    },
    {
      label: "Wearable Technology",
      value: "/for-sale/electronics/wearable-technology",
      comp: <Filter.WearableFilter onChange={subFormChanged} />,
    },
    {
      label: "Networking Devices",
      value: "/for-sale/electronics/networking-devices",
      comp: <Filter.NetworkingFilter onChange={subFormChanged} />,
    },
    {
      label: "Computer Components and Storage",
      value: "/for-sale/electronics/computer-components-storage",
      comp: <Filter.ComputerComponentFilter onChange={subFormChanged} />,
    },
    {
      label: "Office Equipment",
      value: "/for-sale/electronics/office-equipment",
      comp: <Filter.OfficeFilter onChange={subFormChanged} />,
    },
    {
      label: "Security and Surveillance Equipment",
      value: "/for-sale/electronics/security-surveillance",
      comp: <Filter.SecurityFilter onChange={subFormChanged} />,
    },
    {
      label: "Audio Equipment",
      value: "/for-sale/electronics/audio-equipment",
      comp: <Filter.AudioFilter onChange={subFormChanged} />,
    },
    {
      label: "Smart Home Devices",
      value: "/for-sale/electronics/smart-home-devices",
      comp: <Filter.HomeDeviceFilter onChange={subFormChanged} />,
    },
    {
      label: "Batteries and Power Supplies",
      value: "/for-sale/electronics/batteries-power-supplies",
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

  const onTabClick = (_, value) => {
    const selectedTab = filterData[value];
    setFilter({ itemCategory: selectedTab.label });
    router.push(selectedTab.value);
  };

  return (
    <Styled.MainPageSectionWrapper>
      <Styled.FilterTabWrapper>
        <Tabs
          activeTab={filterData.indexOf(
            filterData.filter((f) => f.value === page)[0]
          )}
          onTabClick={onTabClick}
          hideNavBtnsOnMobile={false}
          className="asdf"
        >
          {filterData.map((item, key) => (
            <Tab key={key}>
              {item.label}
              {adCnt
                ? adCnt.length > 0
                  ? "  (" +
                    adCnt.filter(
                      (element) => element.itemCategory === item.label
                    )[0]?.count +
                    ")"
                  : " (0)"
                : " (0)"}
            </Tab>
          ))}
        </Tabs>
      </Styled.FilterTabWrapper>
      {/* <Styled.FilterWrapper>
       <Styled.PostsPageFilterWrapper>
          {filterData.map((item, key) => (
            <span
              key={key}
              onClick={() => handleCategoryClicked(item)}
              className={item.value === page ? "active" : ""}
            >
              {item.label}

              {adCnt
                ? adCnt.length > 0
                  ? "  (" +
                    adCnt.filter(
                      (element) => element.itemCategory === item.label
                    )[0]?.count +
                    ")"
                  : " (0)"
                : " (0)"}
            </span>
          ))}
        </Styled.PostsPageFilterWrapper> 
      </Styled.FilterWrapper>*/}
      <Styled.MainGridWrapper
        className={
          isShowFilter && page !== "/for-sale/electronics/all" ? "filtered" : ""
        }
      >
        {data.length > 0 ? (
          <InfiniteScroll
            dataLength={data.length}
            next={() => getData(getIndex)}
            hasMore={hasMore}
            endMessage={<h4></h4>}
            scrollableTarget="community-list"
            className={
              isShowFilter && page !== "/for-sale/electronics/all"
                ? "filtered"
                : ""
            }
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
        {page !== "/for-sale/electronics/all" && (
          <Styled.FilterSection className={isShowFilter ? "active" : ""}>
            <Styled.FilterToggleButton
              onClick={() => setIsShowFilter((prev) => !prev)}
              className={isShowFilter ? "active" : ""}
            >
              {!isShowFilter ? "Filter" : <MdClose color={"#00000080"} />}
            </Styled.FilterToggleButton>
            <div className="filter-wrapper">
              {filterData.filter((f) => f.value === page)[0].comp}
            </div>
          </Styled.FilterSection>
        )}
      </Styled.MainGridWrapper>
    </Styled.MainPageSectionWrapper>
  );
};
