import React, { useEffect, useState } from "react";
import * as Styled from "./main.styles";
import { CardItem, MultiSelection, SingleSelection } from "@/components";
import axios from "axios";
import { SERVER_URI } from "@/config";
import { toast } from "react-toastify";
import InfiniteScroll from "react-infinite-scroll-component";
import { selectData } from "../upload/detailsform/data";
import { TelevisionFilter } from "./filters/electronics/TelevisionFilter";
import { LapTopFilter } from "./filters/electronics/LaptopFilter";
import { IpadFilter } from "./filters/electronics/IpadFilter";

export const SalesPageSection: React.FC = () => {
  const [getIndex, setGetIndex] = useState(0);
  const [data, setData] = useState<any>([]);
  const [hasMore, setHasMore] = useState(true);
  const [filter, setFilter] = useState({
    itemCategory: "",
    itemCondition: [] as string[],
  });

  const [address, setAddress] = useState("");
  const [countryCode, setCountryCode] = useState("");

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
    setGetIndex(0);
    getData(0);
  }, [address, countryCode]);

  const getData = async (index: number) => {
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

  return (
    <Styled.MainPageSectionWrapper>
      <Styled.FilterWrapper>
        <SingleSelection
          data={selectData.forSale.category}
          placeholder="Select Item Category"
          value={filter.itemCategory}
          onChange={(value) =>
            setFilter((prev) => ({ ...prev, itemCategory: value }))
          }
        />
        {filter.itemCategory == "Televisions" && <TelevisionFilter />}
        {filter.itemCategory == "Laptops and Desktop Computers" && (
          <LapTopFilter />
        )}
        {filter.itemCategory == "iPad, Tablets & eReaders" && <IpadFilter />}
        <button onClick={() => getData(0)}>Search</button>
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
