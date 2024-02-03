import React, { useState } from "react";
import { useRouter } from "next/router";
import * as Styled from "./main.styles";
import InfiniteScroll from "react-infinite-scroll-component";
import { CardItem } from "@/components";
import { MdArrowLeft, MdClose } from "react-icons/md";
import { GardenFilter } from "./filters/garden";
import { gardenFilter } from "./fiterData";
import { Tabs, Tab } from "react-tabs-scrollable";

type GardenProps = {
  page?: string;
};

export const GardenSection: React.FC<GardenProps> = ({ page }) => {
  const router = useRouter();
  const [filter, setFilter] = useState({
    itemCategory: "All",
  });
  const [adCnt, setAdCnt] = useState([]);
  const [isShowFilter, setIsShowFilter] = useState(false);
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

  const onTabClick = (_, value) => {
    const selectedTab = gardenFilter[value];
    setFilter({ itemCategory: selectedTab.label });
    router.push(selectedTab.page);
  };

  return (
    <Styled.MainPageSectionWrapper>
      <Styled.FilterTabWrapper>
        <Tabs
          activeTab={gardenFilter.indexOf(
            gardenFilter.filter((f) => f.page === page)[0]
          )}
          onTabClick={onTabClick}
          hideNavBtnsOnMobile={false}
          className="categoryTab"
        >
          {gardenFilter.map((item, key) => (
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
          {gardenFilter.map((item, key) => (
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
      </Styled.FilterWrapper> */}
      <Styled.MainGridWrapper
        className={
          isShowFilter &&
          page !== "/garden-outdoor-equipment/all-items-for-sale"
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
              isShowFilter &&
              page !== "/garden-outdoor-equipment/all-items-for-sale"
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
        {page !== "/garden-outdoor-equipment/all-items-for-sale" && (
          <Styled.FilterSection className={isShowFilter ? "active" : ""}>
            <Styled.FilterToggleButton
              onClick={() => setIsShowFilter((prev) => !prev)}
              className={isShowFilter ? "active" : ""}
            >
              {!isShowFilter ? "Filters" : <MdClose color={"#00000080"} />}
            </Styled.FilterToggleButton>
            <div className="filter-wrapper">
              <GardenFilter onChange={subFormChanged} />
            </div>
          </Styled.FilterSection>
        )}
      </Styled.MainGridWrapper>
    </Styled.MainPageSectionWrapper>
  );
};
