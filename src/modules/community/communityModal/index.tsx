import React, { useEffect, useState } from "react";
import * as Styled from "./communityModal.styles";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { SERVER_UPLOAD_URI, SERVER_URI } from "@/config";
import { toast } from "react-toastify";

type CommunityModalProps = {
  onClose: () => void;
  open: boolean;
};

export const CommunityViewModal: React.FC<CommunityModalProps> = ({
  onClose,
  open,
}) => {
  const [communityData, setCommunityData] = useState<any>([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchIndex, setSearchIndex] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setSearchIndex(0);
    setCommunityData([]);
    setSearchValue("");
    setHasMore(true);
    if (open) {
      getCommunityData("", 0);
    }
  }, [open]);

  const getCommunityData = async (searchString: string, index: number) => {
    const res = await axios.post(`${SERVER_URI}/community/getMore`, {
      searchString,
      index,
    });
    if (res.data.success) {
      if (index > 0) {
        setCommunityData((prev: any) => [...prev, ...res.data.data]);
      } else {
        setCommunityData([...res.data.data]);
      }
      if (res.data.data.length < 20) {
        setHasMore(false);
      }
      setSearchIndex((prev) => prev + 1);
    } else {
      toast.error(res.data.message);
    }
  };

  const handleSearchClick = () => {
    setSearchIndex(0);
    getCommunityData(searchValue, 0);
    setHasMore(true);
  };
  const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8,
  };

  return (
    <Styled.CommunityModalWrapper className={open ? "open" : ""}>
      <Styled.CommunityModalContainer>
        <h1>
          <span>Find Community</span>
          <MdClose size={24} onClick={onClose} />
        </h1>
        <Styled.CommunityModalContent>
          <Styled.CommuniySearchWrapper>
            <input
              type="text"
              placeholder="Search by Title ..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button onClick={handleSearchClick}>Search</button>
          </Styled.CommuniySearchWrapper>
          <Styled.CommunityListWrapper id="community-list">
            <InfiniteScroll
              dataLength={communityData.length}
              next={() => getCommunityData(searchValue, searchIndex)}
              hasMore={hasMore}
              endMessage={<h4>All data is Loaded</h4>}
              scrollableTarget="community-list"
              loader={<h4>Loading...</h4>}
            >
              {communityData.map((item: any, index: number) => (
                <Styled.CommunityListItem key={index}>
                  {item.userId.avatar ? (
                    <Image
                      src={SERVER_UPLOAD_URI + item.userId.avatar}
                      alt="avatar"
                      width={40}
                      height={40}
                    />
                  ) : (
                    <div className="empty-avatar">
                      {item.userId.firstName[0].toString().toUpperCase() +
                        item.userId.lastName[0].toString().toUpperCase()}
                    </div>
                  )}
                  <div className="user-info">
                    <h1>
                      {item.userId.firstName + " " + item.userId.lastName}
                    </h1>
                    <div>
                      <Rating
                        initialValue={Number(item.userId.reviewMark)}
                        size={10}
                        disableFillHover
                        allowHover={false}
                        readonly
                        onClick={() => {}}
                      />
                      <p>{item.userId.reviewMark}</p>
                      <span>{`(${item.userId.reviewCount} Reviews)`}</span>
                    </div>
                  </div>
                  <p>{item.title}</p>
                  <button>View Community</button>
                </Styled.CommunityListItem>
              ))}
            </InfiniteScroll>
          </Styled.CommunityListWrapper>
        </Styled.CommunityModalContent>
      </Styled.CommunityModalContainer>
      <Styled.CommunityModalOverlay onClick={onClose} />
    </Styled.CommunityModalWrapper>
  );
};
