import React, { useState } from "react";
import { useRouter } from "next/router";
import * as Styled from "./main.styles";
import InfiniteScroll from "react-infinite-scroll-component";
import { CardItem } from "@/components";
import { MdArrowLeft, MdClose } from "react-icons/md";
import { FoodFilter } from "./filters/food";
import { foodFilter } from "./fiterData";

type FoodProps = {
  page?: string;
};

export const FoodSection: React.FC<FoodProps> = ({ page }) => {
  const router = useRouter();
  const [filter, setFilter] = useState({
    itemCategory: "All",
  });
  const [adCnt, setAdCnt] = useState([]);
  const [isShowFilter, setIsShowFilter] = useState(true);
  const [data, setData] = useState<any>([]);
  const [getIndex, setGetIndex] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const handleCategoryClicked = (item: any) => {
    setFilter({ itemCategory: item.label });
    router.push(item.page);
  };

  const getData = async (index: number) => {};

  const subFormChanged = (data) => {
    setFilter((prev) => ({ ...prev, ...data }));
  };

  return (
    <Styled.MainPageSectionWrapper>
      <Styled.FilterWrapper>
        <Styled.PostsPageFilterWrapper>
          {foodFilter.map((item, key) => (
            <span
              key={key}
              onClick={() => handleCategoryClicked(item)}
              className={item.page === page ? "active" : ""}
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
      </Styled.FilterWrapper>
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
        {page !== "/culinary-products/world-cuisines" && (
          <Styled.FilterSection className={isShowFilter ? "active" : ""}>
            <Styled.FilterToggleButton
              onClick={() => setIsShowFilter((prev) => !prev)}
            >
              {!isShowFilter ? (
                <MdArrowLeft color={"#00000080"} />
              ) : (
                <MdClose color={"#00000080"} />
              )}
            </Styled.FilterToggleButton>
            <div className="filter-wrapper">
              <FoodFilter onChange={subFormChanged} />
            </div>
          </Styled.FilterSection>
        )}
      </Styled.MainGridWrapper>
    </Styled.MainPageSectionWrapper>
  );
};
