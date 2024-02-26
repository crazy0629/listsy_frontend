import React, { useEffect, useRef, useState } from "react";
import * as Styled from "./main.styles";
import { CardItem, MultiSelection } from "@/components";
import axios from "axios";
import { SERVER_URI } from "@/config";
import { toast } from "react-toastify";
import InfiniteScroll from "react-infinite-scroll-component";
import { selectData } from "../upload/detailsform/DataList/data-pets";
import { PetFilter } from "./filters/pet/PetFilter";

export const PetsPageSection: React.FC = () => {
  const [getIndex, setGetIndex] = useState(0);
  const [data, setData] = useState<any>([]);
  const [hasMore, setHasMore] = useState(true);
  const [filter, setFilter] = useState(null);

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
    setGetIndex(0);

    getData(0);
  }, [address, countryCode]);

  const handleCategoryClicked = (value) => {
    setFilter({ itemCategory: value });
  };

  const getData = async (index: number) => {
    const categoryList = selectData.pet.category;

    const adsCountData = await axios.post(
      `${SERVER_URI}/pet/getCountForEachCategory`,
      { itemCategory: categoryList, address, countryCode }
    );

    const adCnt = adsCountData.data.countList;
    setAdCnt(adsCountData.data.countList);

    const res = await axios.post(`${SERVER_URI}/pet/getPetAds`, {
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
          {selectData.pet.category.map((item, key) => (
            <span
              key={key}
              onClick={() => handleCategoryClicked(item)}
              className={item === filter.itemCategory ? "active" : ""}
            >
              {item}

              {adCnt
                ? adCnt.length > 0 &&
                  "  (" +
                    adCnt.filter((element) => element.itemCategory == item)[0]
                      ?.count +
                    ")"
                : " (0)"}
            </span>
          ))}
        </Styled.PostsPageFilterWrapper>
        {/* {(filter.itemCategory == "Pets for sale" ||
          filter.itemCategory == "Pets for adoption") && (
          <PetFilter onChange={subFormChanged} />
        )} */}
      </Styled.FilterWrapper>
      <Styled.MainGridWrapper>
        <InfiniteScroll
          dataLength={data.length}
          next={() => getData(getIndex)}
          hasMore={hasMore}
          endMessage={<h4></h4>}
          scrollableTarget="community-list"
          loader={<h4>Loading...</h4>}
        >
          {data.length > 0 &&
            data.map((item: any, key: number) => (
              <CardItem
                id={item.adId?._id}
                key={key}
                type={"pet"}
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
                // subCategory={filter.itemCategory
                //   .replaceAll(" ", "-")
                //   .toLowerCase()}
              />
            ))}
        </InfiniteScroll>
      </Styled.MainGridWrapper>
    </Styled.MainPageSectionWrapper>
  );
};
