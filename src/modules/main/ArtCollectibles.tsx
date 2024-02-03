import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import * as Styled from "./main.styles";
import InfiniteScroll from "react-infinite-scroll-component";
import { CardItem } from "@/components";
import { MdArrowLeft, MdClose } from "react-icons/md";
import { ArtFilter } from "./filters/art";
import { artFilter } from "./fiterData";

type MusicalProps = {
  page?: string;
  sub?: string;
};

export const ArtCollectibleSection: React.FC<MusicalProps> = ({
  page,
  sub,
}) => {
  const router = useRouter();
  const [filter, setFilter] = useState({
    itemCategory: "All",
  });
  const [adCnt, setAdCnt] = useState([]);
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [data, setData] = useState<any>([]);
  const [getIndex, setGetIndex] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [subToggle, setSubToggle] = useState("");

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
          {artFilter.map((item, key) => (
            <div
              key={key}
              onClick={
                item.sub.length > 0
                  ? () =>
                      subToggle === item.label
                        ? setSubToggle("")
                        : setSubToggle(item.label)
                  : () => handleCategoryClicked(item)
              }
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
            </div>
          ))}
        </Styled.PostsPageFilterWrapper>
      </Styled.FilterWrapper>
      {subToggle && (
        <Styled.SubFilterWrapper ref={wrapperRef}>
          <Styled.PostsPageFilterWrapper>
            {artFilter
              .filter((f) => f.label === subToggle)[0]
              .sub.map((item, key) => (
                <div
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
                </div>
              ))}
          </Styled.PostsPageFilterWrapper>
        </Styled.SubFilterWrapper>
      )}
      <Styled.MainGridWrapper
        className={
          isShowFilter && page !== "/art-collectibles/all-items-for-sale"
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
              isShowFilter && page !== "/art-collectibles/all-items-for-sale"
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
        {page !== "/art-collectibles/all-items-for-sale" && (
          <Styled.FilterSection className={isShowFilter ? "active" : ""}>
            <Styled.FilterToggleButton
              onClick={() => setIsShowFilter((prev) => !prev)}
              className={isShowFilter ? "active" : ""}
            >
              {!isShowFilter ? "Filters" : <MdClose color={"#00000080"} />}
            </Styled.FilterToggleButton>
            <div className="filter-wrapper">
              <ArtFilter onChange={subFormChanged} />
            </div>
          </Styled.FilterSection>
        )}
      </Styled.MainGridWrapper>
    </Styled.MainPageSectionWrapper>
  );
};
