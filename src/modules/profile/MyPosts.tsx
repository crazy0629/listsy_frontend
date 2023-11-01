import React, { useContext, useEffect, useState } from "react";
import * as Styled from "./profile.styles";
import { Auth as AuthContext } from "@/context/contexts";
import axios from "axios";
import { SERVER_UPLOAD_URI, SERVER_URI } from "@/config";
import { toast } from "react-toastify";
import InfiniteScroll from "react-infinite-scroll-component";
import { CardItem } from "@/components";
import {
  JobListContainer,
  JobListItemWrapper,
  JobListWrapper,
} from "../main/main.styles";
import Image from "next/image";

const pageFilter = [
  {
    label: "For Sale",
    key: "sale",
    type: "grid",
  },
  {
    label: "Real Estate",
    key: "estate",
    type: "grid",
  },
  {
    label: "Vehicles",
    key: "truck",
    type: "grid",
  },
  {
    label: "Services",
    key: "service",
    type: "grid",
  },
  {
    label: "Pets",
    key: "pet",
    type: "grid",
  },
  {
    label: "Jobs",
    key: "job",
    type: "list",
  },
];

const status = [
  {
    label: "Actived",
    key: "Active",
  },
  {
    label: "Suspended",
    key: "Suspended",
  },
  {
    label: "Expired",
    key: "Expired",
  },
];

export const MyPosts: React.FC = () => {
  const [data, setData] = useState<any>([]);
  const [selectedPage, setSelectedPage] = useState(pageFilter[1]);
  const [adStatus, setAdStatus] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(0);
  const [selectedJob, setSelectedJob] = useState(-1);
  const { authContext } = useContext<any>(AuthContext);
  const [loading, setLoading] = useState(false);
  const [proposalLoading, setProposalLoading] = useState(false);
  const [proposals, setProposals] = useState<any>([]);

  useEffect(() => {
    if (authContext.user) {
      getData(selectedPage.key, "", 0);
    }
  }, [authContext.user]);

  const getData = async (
    postType: string,
    adState: string,
    getIndex: number
  ) => {
    setLoading(true);
    const res = await axios.post(`${SERVER_URI}/profile/getPostByUser`, {
      postType,
      userId: authContext?.user?.id,
      adState,
      index: getIndex,
    });
    if (res.data.success) {
      if (getIndex > 0) {
        setData((prev: any) => [...prev, ...res.data.data]);
      } else {
        setData([...res.data.data]);
      }
      if (res.data.data.length < 50) {
        setHasMore(false);
      }
      setIndex(getIndex + 1);
    } else {
      toast.error(res.data.message);
    }
    setLoading(false);
  };

  const filterAdStatus = (adState: string) => {
    setAdStatus(adState);
    if (adStatus === adState) {
      setAdStatus("");
      getData(selectedPage.key, "", 0);
    } else {
      setAdStatus(adState);
      getData(selectedPage.key, adState, 0);
    }
  };

  const handlePageFilterClick = (item: any) => {
    if (item.key !== selectedPage.key) {
      setSelectedPage(item);
      getData(item.key, adStatus, 0);
    }
  };

  const handleGetProposalByJob = async (jobId: string) => {
    setProposalLoading(true);
    const res = await axios.post(
      `${SERVER_URI}/proposal/getProposalListPerJob`,
      { jobId }
    );
    if (res.data.success) {
      setProposals(res.data.data);
    } else {
      toast.error(res.data.message);
    }
    setProposalLoading(false);
  };

  return (
    <Styled.PostsPageWrapper>
      <Styled.PostsFilterWrapper>
        <Styled.PostsPageFilterWrapper>
          {pageFilter.map((item, key) => (
            <span
              key={key}
              onClick={() => handlePageFilterClick(item)}
              className={item.key === selectedPage.key ? "active" : ""}
            >
              {item.label}
            </span>
          ))}
        </Styled.PostsPageFilterWrapper>
        {!(selectedPage.key === "job" || selectedPage.key === "community") && (
          <Styled.StatusWrapper>
            {status.map((item, key) => (
              <span
                key={key}
                onClick={() => filterAdStatus(item.key)}
                className={`${item.key} ${
                  adStatus === "" || adStatus === item.key ? "selected" : ""
                }`}
              >
                {item.label}
              </span>
            ))}
          </Styled.StatusWrapper>
        )}
      </Styled.PostsFilterWrapper>
      {selectedPage.type === "grid" && (
        <Styled.PostsGridWrapper>
          {loading ? (
            <h4>Loading...</h4>
          ) : data.length > 0 ? (
            <InfiniteScroll
              dataLength={data.length}
              next={() => getData(selectedPage.key, adStatus, index)}
              hasMore={hasMore}
              endMessage={<h4></h4>}
              loader={<h4>Loading...</h4>}
            >
              {data.map((item: any, key: number) => (
                <CardItem
                  id={item.adId._id}
                  key={key}
                  type={selectedPage.key}
                  link={item.adId?.adFileName}
                  postDate={item.adId?.uploadDate}
                  adStatus={item.adId?.state}
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
                  isBoost={true}
                  firstName={item.userId?.firstName}
                  lastName={item.userId?.lastName}
                  viewCount={item.viewCount}
                  duration={item.adId?.duration}
                />
              ))}
            </InfiniteScroll>
          ) : (
            <h4>No Data</h4>
          )}
        </Styled.PostsGridWrapper>
      )}
      {selectedPage.type === "list" && (
        <Styled.PostsListWrapper>
          <JobListWrapper style={{ height: "100%" }}>
            <JobListContainer style={{ padding: 0 }}>
              {loading ? (
                <h4>Loading...</h4>
              ) : data.length > 0 ? (
                <InfiniteScroll
                  dataLength={data.length}
                  next={() => {}}
                  hasMore={hasMore}
                  endMessage={<></>}
                  loader={<h4>Loading...</h4>}
                >
                  {data.length > 0 &&
                    data.map((item: any, key: number) => (
                      <JobListItemWrapper
                        key={key}
                        onClick={
                          selectedJob === key
                            ? () => setSelectedJob(-1)
                            : () => {
                                handleGetProposalByJob(item._id);
                                setSelectedJob(key);
                              }
                        }
                      >
                        <h1>{item.jobTitle}</h1>
                        <p>{item.jobDescription}</p>
                        <h4>
                          {item.priceUnit + " " + item.price}
                          <span>{" / " + item.paidType}</span>
                        </h4>
                      </JobListItemWrapper>
                    ))}
                </InfiniteScroll>
              ) : (
                <h4>No Data</h4>
              )}
            </JobListContainer>
            {selectedJob > -1 && (
              <Styled.JobDetailsWrapper>
                {proposalLoading ? (
                  <p>Loading...</p>
                ) : proposals.length > 0 ? (
                  proposals.map((item: any, key: number) => (
                    <Styled.ProposalDetailsWrapper key={key}>
                      <div className="user-info">
                        {item.userId?.avatar ? (
                          <Image
                            src={SERVER_UPLOAD_URI + item.userId?.avatar}
                            alt="avatar"
                            width={24}
                            height={24}
                          />
                        ) : (
                          <span>
                            {item.userId?.firstName[0].toUpperCase() +
                              item.userId?.lastName[0].toUpperCase()}
                          </span>
                        )}
                        <h3>
                          {item.userId?.firstName + " " + item.userId?.lastName}
                        </h3>
                      </div>
                      <h5>Cover letter</h5>
                      <p>{item?.proposalContent}</p>
                      <h5>Attachments</h5>
                      {item?.attachedFileNames.length > 0 ? (
                        item.attachedFileNames.map(
                          (file: any, fKey: number) => (
                            <a
                              href={SERVER_UPLOAD_URI + file}
                              key={fKey}
                              target="_blank"
                              download={true}
                            >
                              {item.attachOriginalNames[fKey]}
                            </a>
                          )
                        )
                      ) : (
                        <p>No Files</p>
                      )}
                      <button>Send Message</button>
                    </Styled.ProposalDetailsWrapper>
                  ))
                ) : (
                  <p>No Proposals</p>
                )}
              </Styled.JobDetailsWrapper>
            )}
          </JobListWrapper>
        </Styled.PostsListWrapper>
      )}
    </Styled.PostsPageWrapper>
  );
};
