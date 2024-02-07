import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as Styled from "./main.styles";
import InfiniteScroll from "react-infinite-scroll-component";
import { CardItem } from "@/components";
import { MdClose } from "react-icons/md";
import { FoodFilter } from "./filters/food";
import { foodFilter } from "./fiterData";
import { Tabs, Tab } from "react-tabs-scrollable";
import { toast } from "react-toastify";
import axios from "axios";
import { SERVER_URI } from "@/config";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type FoodProps = {
  page?: string;
};

export const FoodSection: React.FC<FoodProps> = ({ page }) => {
  const router = useRouter();
  const [filter, setFilter] = useState({
    itemCategory: "All",
  });
  const [adCnt, setAdCnt] = useState([]);
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [data, setData] = useState<any>([]);
  const [getIndex, setGetIndex] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [address, setAddress] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const getData = async (index: number) => {
    const categoryList = foodFilter.map((item) => item.label);

    const adsCountData = await axios.post(
      `${SERVER_URI}/food/getCountForEachCategory`,
      { itemCategory: categoryList, address, countryCode }
    );

    setAdCnt(adsCountData.data.countList);

    const tempFilter = foodFilter.filter((f) => f.page === page)[0].label;
    const res = await axios.post(`${SERVER_URI}/food/getFoodAds`, {
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

  const onTabClick = (_, value) => {
    const selectedTab = foodFilter[value];
    setFilter({ itemCategory: selectedTab.label });
    router.push(selectedTab.page);
  };

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

  return (
    <Styled.MainPageSectionWrapper>
      <Styled.FilterTabWrapper>
        <Tabs
          activeTab={foodFilter.indexOf(
            foodFilter.filter((f) => f.page === page)[0]
          )}
          onTabClick={onTabClick}
          hideNavBtnsOnMobile={false}
          className="categoryTab"
          leftBtnIcon={<IoIosArrowBack />}
          rightBtnIcon={<IoIosArrowForward />}
        >
          {foodFilter.map((item, key) => (
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
      <Styled.MainGridWrapper
        className={
          isShowFilter && page !== "/culinary-products/world-cuisines"
            ? "filtered"
            : ""
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
              isShowFilter && page !== "/culinary-products/world-cuisines"
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
                  type={"food"}
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
        {page !== "/culinary-products/world-cuisines" && (
          <Styled.FilterSection className={isShowFilter ? "active" : ""}>
            <Styled.FilterToggleButton
              onClick={() => setIsShowFilter((prev) => !prev)}
              className={isShowFilter ? "active" : ""}
            >
              {!isShowFilter ? "Filters" : <MdClose color={"#00000080"} />}
            </Styled.FilterToggleButton>
            <div className="filter-wrapper">
              <FoodFilter
                onChange={subFormChanged}
                itemCategory={
                  foodFilter.filter((f) => f.page === page)[0].label
                }
              />
            </div>
          </Styled.FilterSection>
        )}
      </Styled.MainGridWrapper>
    </Styled.MainPageSectionWrapper>
  );
};
