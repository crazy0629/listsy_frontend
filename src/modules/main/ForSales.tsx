import React, { useEffect, useState } from "react";
import * as Styled from "./main.styles";
import { CardItem, MultiSelection } from "@/components";
import axios from "axios";
import { SERVER_URI } from "@/config";
import { toast } from "react-toastify";
import InfiniteScroll from "react-infinite-scroll-component";

export const SalesPageSection: React.FC = () => {
  const [getIndex, setGetIndex] = useState(0);
  const [data, setData] = useState<any>([]);
  const [hasMore, setHasMore] = useState(true);
  const [filter, setFilter] = useState({
    itemCategory: [] as string[],
    itemCondition: [] as string[],
  });

  useEffect(() => {
    getData(0);
  }, []);

  const getData = async (index: number) => {
    const res = await axios.post(`${SERVER_URI}/sale/getForSaleAds`, {
      ...filter,
      index,
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
          data={[
            "Appliances",
            "Art & Crafts",
            "Audio & Stereo Equipment",
            "Automotive Items & Parts",
            "Baby & Kids Stuff",
            "Bicycles",
            "Books ,Comics & Magazines",
            "Cameras & Photography Equipment",
            "Christmas Decorations",
            "Clothes, Shoes & Accessories",
            "Collectibles &  Sports Memorabilia",
            "Computers,Tablets, Software  & Hardware",
            "DIY Tools & Materials",
            "Freebies",
            "Health & Beauty",
            "Heavy Equipment",
            "Home & Garden",
            "Household & Furniture",
            "Jewellery & Watches",
            "Films & TV",
            "Music & CDs",
            "Musical Instruments & DJ Equipment",
            "Office Furniture & Equipment",
            "Mobile Phones, Smart Watches & Accessories",
            "Sports, Leisure & Travel",
            "Stuff Wanted",
            "Tickets",
            " Video Games & Consoles",
            "Food & Drink",
            "Tyres",
            "Toys & Hobbies",
            "Digital Goods",
          ]}
          placeholder="Select Item Category"
          value={filter.itemCategory}
          onChange={(value) =>
            setFilter((prev) => ({ ...prev, itemCategory: value }))
          }
        />
        <MultiSelection
          data={["New", "Refurbished", "Used", "For parts or not working"]}
          placeholder="Select Item Condition"
          value={filter.itemCondition}
          onChange={(value) =>
            setFilter((prev) => ({ ...prev, itemCondition: value }))
          }
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
                type={"sale"}
                link={item.adId?.adFileName}
                postDate={item.adId?.uploadDate}
                price={item.price}
                priceUnit={item.priceUnit}
                reviewCount={item.userId?.reviewCount}
                reviewMark={item.userId?.reviewMark}
                subtitle={item.subTitle}
                title={item.title}
                country={item.addressCountry}
                state={item.addressState}
                city={item.addressCity}
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
