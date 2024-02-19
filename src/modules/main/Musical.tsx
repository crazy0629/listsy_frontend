import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import * as Styled from "./main.styles";
import InfiniteScroll from "react-infinite-scroll-component";
import { CardItem } from "@/components";
import { MdArrowLeft, MdClose } from "react-icons/md";
import { MusicalFilter } from "./filters/musical";
import { musicalFilter } from "./fiterData";
import { Tabs, Tab } from "react-tabs-scrollable";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { SERVER_URI } from "@/config";
import axios from "axios";
import { toast } from "react-toastify";

type MusicalProps = {
  page?: string;
  sub?: string;
};

export const MusicalSection: React.FC<MusicalProps> = ({ page, sub }) => {
  const router = useRouter();
  const [filter, setFilter] = useState({
    itemCategory: "All",
  });
  const [adCnt, setAdCnt] = useState([]);
  const [subAdCnt, setSubAdCnt] = useState([]);
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [data, setData] = useState<any>([]);
  const [getIndex, setGetIndex] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [subToggle, setSubToggle] = useState("");
  const [address, setAddress] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const wrapperRef = useRef<any>(null);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSubToggle("");
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const handleCategoryClicked = async (item: any, parent: any) => {
    setFilter({ itemCategory: parent.label });
    setGetIndex(0);

    if (item !== "") router.push(item.page);
    else router.push(parent.page);
  };

  const getAdCount = async () => {
    const categoryList = musicalFilter.map((item) => item.label);

    const adsCountData = await axios.post(
      `${SERVER_URI}/music/getCountForEachCategory`,
      { itemCategory: categoryList, address, countryCode }
    );

    setAdCnt(adsCountData.data.countList);
  };

  const subFormChanged = (data) => {
    setFilter((prev) => ({ ...prev, ...data }));
  };

  const onTabClick = (_, value) => {
    musicalFilter[value].sub.length > 0
      ? subToggle === musicalFilter[value].label
        ? setSubToggle("")
        : setSubToggle(musicalFilter[value].label)
      : handleCategoryClicked("", musicalFilter[value]);
    setSubAdCnt([]);
    if (musicalFilter[value].label != undefined)
      getSubAdsCount(musicalFilter[value].label);
  };

  const getAdData = async (index: number) => {
    const categoryName = sub;
    const subCategoryName = sub == "All" ? "" : page.split("/")[2];
    const res = await axios.post(`${SERVER_URI}/music/getMusicAds`, {
      ...filter,
      itemCategory: categoryName,
      itemSubCategory: subCategoryName,
      index,
      address,
      countryCode,
    });
    if (res.data.success) {
      if (getIndex > 0) {
        // setData((prev: any) => [...prev, ...res.data.data]);
        setData([...res.data.data]);
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
  }, []);

  useEffect(() => {
    if (address == "") return;
    getAdCount();
    setGetIndex(0);
    getAdData(0);
  }, [filter]);

  const getSubAdsCount = async (value) => {
    const subAdsCount = await axios.post(
      `${SERVER_URI}/music/getSubCountForEachCategory`,
      {
        itemCategory: value,
        itemSubCategory: musicalFilter
          .filter((item) => item.label == value)[0]
          .sub.map((item) => item.label),
      }
    );
    setSubAdCnt(subAdsCount.data.countList);
  };

  useEffect(() => {
    if (address == "") return;
    setGetIndex(0);
    setFilter((prev) => ({ ...prev, itemCategory: "All" }));
    getAdCount();
    getAdData(0);
  }, [address, countryCode]);

  return (
    <Styled.MainPageSectionWrapper>
      <Styled.FilterTabWrapper>
        <Tabs
          activeTab={musicalFilter.indexOf(
            musicalFilter.filter((f) => f.page === page)[0]
          )}
          onTabClick={onTabClick}
          hideNavBtnsOnMobile={false}
          className="categoryTab"
          leftBtnIcon={<IoIosArrowBack />}
          rightBtnIcon={<IoIosArrowForward />}
        >
          {musicalFilter.map((item, key) => (
            <Tab
              key={key}
              className={
                item.label === sub
                  ? "active"
                  : subToggle === item.label
                  ? "sub-active"
                  : ""
              }
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
            </Tab>
          ))}
        </Tabs>
      </Styled.FilterTabWrapper>
      {subToggle && (
        <Styled.SubFilterWrapper ref={wrapperRef}>
          <Styled.PostsPageFilterWrapper>
            {musicalFilter
              .filter((f) => f.label === subToggle)[0]
              .sub.map((item, key) => (
                <div
                  key={key}
                  onClick={() =>
                    handleCategoryClicked(
                      item,
                      musicalFilter.filter((f) => f.label === subToggle)[0]
                    )
                  }
                  className={item.page === page ? "active" : ""}
                >
                  {item.label}

                  {subAdCnt
                    ? subAdCnt.length > 0
                      ? "  (" +
                        subAdCnt.filter(
                          (element) => element.itemSubCategory === item.label
                        )[0]?.count +
                        ")"
                      : " (0)"
                    : " (0)"}
                </div>
              ))}
          </Styled.PostsPageFilterWrapper>
        </Styled.SubFilterWrapper>
      )}
      <Styled.MainGridWrapper
        className={
          isShowFilter &&
          page !== "/musical-instruments-for-sale/all-instruments"
            ? "filtered"
            : ""
        }
      >
        {data.length > 0 ? (
          <InfiniteScroll
            dataLength={data.length}
            next={() => getAdData(getIndex)}
            hasMore={hasMore}
            endMessage={<h4></h4>}
            scrollableTarget="community-list"
            className={
              isShowFilter &&
              page !== "/musical-instruments-for-sale/all-instruments"
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
                  type={"music"}
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
        {page !== "/musical-instruments-for-sale/all-instruments" && (
          <Styled.FilterSection className={isShowFilter ? "active" : ""}>
            <Styled.FilterToggleButton
              onClick={() => setIsShowFilter((prev) => !prev)}
              className={isShowFilter ? "active" : ""}
            >
              {!isShowFilter ? "Filters" : <MdClose color={"#00000080"} />}
            </Styled.FilterToggleButton>
            <div className="filter-wrapper">
              <MusicalFilter onChange={subFormChanged} />
            </div>
          </Styled.FilterSection>
        )}
      </Styled.MainGridWrapper>
    </Styled.MainPageSectionWrapper>
  );
};
