import React, { useEffect, useState } from "react";
import * as Styled from "./main.styles";
import { CardItem, MultiSelection } from "@/components";
import axios from "axios";
import { SERVER_URI } from "@/config";
import { toast } from "react-toastify";
import InfiniteScroll from "react-infinite-scroll-component";

export const TruckPageSection: React.FC = () => {
  const [getIndex, setGetIndex] = useState(0);
  const [data, setData] = useState<any>([]);
  const [hasMore, setHasMore] = useState(true);
  const [filter, setFilter] = useState({
    vehicleType: [] as string[],
    saleType: [] as string[],
    condition: [] as string[],
    vehicleMake: [] as string[],
    vehicleModel: [] as string[],
    year: [] as string[],
    gearBox: [] as string[],
  });

  useEffect(() => {
    getData(0);
  }, []);

  const getData = async (index: number) => {
    const res = await axios.post(`${SERVER_URI}/truck/getMoreVehicleAds`, {
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
            "Aircraft",
            "Boats & Watercraft",
            "Cars",
            "Classic Cars",
            "Commericial Trucks",
            "Motorcycles",
            "RV & Motorhomes",
            "SUVs",
            "Trucks",
            "Utility & Work Trailers",
            "Vans",
            "Bikes",
            "Heavy Machinery",
            "Vehicles Wanted",
          ]}
          placeholder="Select Vehicle Type"
          value={filter.vehicleType}
          onChange={(value) =>
            setFilter((prev) => ({ ...prev, vehicleType: value }))
          }
        />
        <MultiSelection
          data={["Private Seller", "Trader"]}
          placeholder="Select Sale Type"
          value={filter.saleType}
          onChange={(value) =>
            setFilter((prev) => ({ ...prev, saleType: value }))
          }
        />
        <MultiSelection
          data={["Brand new", "Used", "Accident damaged"]}
          placeholder="Select Condition"
          value={filter.condition}
          onChange={(value) =>
            setFilter((prev) => ({ ...prev, condition: value }))
          }
        />
        <MultiSelection
          data={["Make 1", "Make 2"]}
          value={filter.vehicleMake}
          onChange={(value) =>
            setFilter((prev) => ({ ...prev, vehicleMake: value }))
          }
          placeholder="Select the Vehicle Make"
        />
        <MultiSelection
          data={["Model 1", "Model 2"]}
          value={filter.vehicleModel}
          onChange={(value) =>
            setFilter((prev) => ({ ...prev, vehicleModel: value }))
          }
          placeholder="Select the Vehicle Model"
        />
        <MultiSelection
          data={[
            ...[...new Array(new Date().getFullYear() - 1899)].map(
              (_, index) => {
                return (
                  index +
                  new Date(Date.now()).getFullYear() -
                  (new Date(Date.now()).getFullYear() - 1900)
                ).toString();
              }
            ),
          ].reverse()}
          value={filter.year}
          onChange={(value) => setFilter((prev) => ({ ...prev, year: value }))}
          placeholder="Select the Year"
        />
        <MultiSelection
          data={["Manual", "Automatic"]}
          value={filter.gearBox}
          onChange={(value) =>
            setFilter((prev) => ({ ...prev, gearBox: value }))
          }
          placeholder="Select the Gearbox"
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
                id={item.adId?._id}
                key={key}
                link={item.adId?.adFileName}
                type={"truck"}
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
