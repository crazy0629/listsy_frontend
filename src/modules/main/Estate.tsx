import React, { useEffect, useState } from "react";
import * as Styled from "./main.styles";
import { CardItem, MultiSelection } from "@/components";
import axios from "axios";
import { SERVER_URI } from "@/config";
import { toast } from "react-toastify";
import InfiniteScroll from "react-infinite-scroll-component";

export const EstatePageSection: React.FC = () => {
  const [getIndex, setGetIndex] = useState(0);
  const [data, setData] = useState<any>([]);
  const [hasMore, setHasMore] = useState(true);
  const [filter, setFilter] = useState({
    listingType: [] as string[],
    propertyType: [] as string[],
    bedroomCount: [] as string[],
    bathroomCount: [] as string[],
  });

  const [address, setAddress] = useState("");
  const [countryCode, setCountryCode] = useState("");

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

  const getData = async (index: number) => {
    const res = await axios.post(`${SERVER_URI}/estate/getEstateObjects`, {
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
        <MultiSelection
          data={["Buying", "Renting", "Selling"]}
          placeholder="Select Listing Type"
          value={filter.listingType}
          onChange={(value) =>
            setFilter((prev) => ({ ...prev, listingType: value }))
          }
        />
        <MultiSelection
          data={[
            "House",
            "Condominium",
            "Apartment/Flat",
            "Commericial",
            "Farmhouse",
            "Land",
            "Industrial",
            "Room",
            "Other",
          ]}
          placeholder="Select Property Type"
          value={filter.propertyType}
          onChange={(value) =>
            setFilter((prev) => ({ ...prev, propertyType: value }))
          }
        />
        <MultiSelection
          data={["1", "2", "3", "4", "5+", "None"]}
          placeholder="Select Bedrooms"
          value={filter.bedroomCount}
          onChange={(value) =>
            setFilter((prev) => ({ ...prev, bedroomCount: value }))
          }
        />
        <MultiSelection
          data={["1", "2", "3", "4", "5+", "None"]}
          value={filter.bathroomCount}
          onChange={(value) =>
            setFilter((prev) => ({ ...prev, bathroomCount: value }))
          }
          placeholder="Select Bathrooms"
        />
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
                type={"estate"}
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
