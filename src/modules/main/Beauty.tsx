import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as Styled from "./main.styles";
import InfiniteScroll from "react-infinite-scroll-component";
import { CardItem } from "@/components";
import { MdArrowLeft, MdClose } from "react-icons/md";
import { BeautyFilter } from "./filters/beauty";
import { beautyFilter } from "./fiterData";
import { Tabs, Tab } from "react-tabs-scrollable";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { toast } from "react-toastify";
import axios from "axios";
import { SERVER_URI } from "@/config";

type BeautyProps = {
  page?: string;
};

export const BeautySection: React.FC<BeautyProps> = ({ page }) => {
  const router = useRouter();
  const [filter, setFilter] = useState(null);
  const [adCnt, setAdCnt] = useState([]);
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [data, setData] = useState<any>([]);
  const [getIndex, setGetIndex] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [address, setAddress] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [loading, setLoading] = useState(true);

  const getData = async (index: number) => {
    setLoading(true);
    const categoryList = beautyFilter.map((item) => item.label);

    const adsCountData = await axios.post(
      `${SERVER_URI}/beauty/getCountForEachCategory`,
      { itemCategory: categoryList, address, countryCode }
    );

    setAdCnt(adsCountData.data.countList);

    const tempFilter = beautyFilter.filter((f) => f.page === page)[0].label;
    const res = await axios.post(`${SERVER_URI}/beauty/getBeautyAds`, {
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
    setLoading(false);
  };

  const subFormChanged = (data) => {
    setFilter((prev) => ({ ...prev, ...data }));
  };

  const onTabClick = (_, value) => {
    const selectedTab = beautyFilter[value];
    setFilter({ itemCategory: selectedTab.label });
    router.push(selectedTab.page);
  };

  const getLocationInfo = () => {
    let locationAddress = localStorage.getItem("locationAddress");
    let countryCode = localStorage.getItem("locationCountryCode");
    setAddress(locationAddress);
    setCountryCode(countryCode);
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
    setGetIndex(0);

    getData(0);
  }, [address, countryCode]);

  return (
    <Styled.MainPageSectionWrapper>
      <Styled.FilterTabWrapper>
        <Tabs
          activeTab={beautyFilter.indexOf(
            beautyFilter.filter((f) => f.page === page)[0]
          )}
          onTabClick={onTabClick}
          hideNavBtnsOnMobile={false}
          className="categoryTab"
          leftBtnIcon={<IoIosArrowBack />}
          rightBtnIcon={<IoIosArrowForward />}
        >
          {beautyFilter.map((item, key) => (
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
          isShowFilter && page !== "/for-sale/beauty-personal-care"
            ? "filtered"
            : ""
        }
      >
        {loading ? (
          <div className="no-data">Loading ...</div>
        ) : data.length > 0 ? (
          <InfiniteScroll
            dataLength={data.length}
            next={() => getData(getIndex)}
            hasMore={hasMore}
            endMessage={<h4></h4>}
            scrollableTarget="community-list"
            className={
              isShowFilter && page !== "/for-sale/beauty-personal-care"
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
                  type={"beauty"}
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
                  subCategory={item.itemCategory
                    .replaceAll(" ", "-")
                    .toLowerCase()}
                />
              ))}
          </InfiniteScroll>
        ) : (
          <div className="no-data">
            Got something to sell? Post it for free and be the first!
          </div>
        )}
        {page !== "/for-sale/beauty-personal-care" && (
          <Styled.FilterSection className={isShowFilter ? "active" : ""}>
            <Styled.FilterToggleButton
              onClick={() => setIsShowFilter((prev) => !prev)}
              className={isShowFilter ? "active" : ""}
            >
              {!isShowFilter ? "Filters" : <MdClose color={"#00000080"} />}
            </Styled.FilterToggleButton>
            <div className="filter-wrapper">
              <BeautyFilter
                onChange={subFormChanged}
                itemCategory={
                  beautyFilter.filter((f) => f.page === page)[0].label
                }
              />
            </div>
          </Styled.FilterSection>
        )}
      </Styled.MainGridWrapper>
    </Styled.MainPageSectionWrapper>
  );
};
