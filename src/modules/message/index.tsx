import React, { useEffect, useState } from "react";
import * as Styled from "./message.styles";
import { IoIosSearch, IoIosSend } from "react-icons/io";
import Image from "next/image";
import { MdLocationOn, MdPhone } from "react-icons/md";
import { Rating } from "react-simple-star-rating";
import { ImAttachment } from "react-icons/im";
import { GrEmoji } from "react-icons/gr";
import { useRouter } from "next/router";
import { SERVER_UPLOAD_URI, SERVER_URI } from "@/config";
import axios from "axios";
import { toast } from "react-toastify";

export const MessageRoom: React.FC = () => {
  const router = useRouter();
  const { senderId, receiverId } = router.query;
  const [chatUserList, setChatUserList] = useState<Array<any>>([]);
  const [chatUserListLoading, setChatUserListLoading] = useState(true);
  useEffect(() => {
    if (senderId && receiverId) {
      getChatUserList();
    }
  }, [senderId, receiverId]);

  const getChatUserList = async () => {
    setChatUserListLoading(true);
    const res = await axios.post(`${SERVER_URI}/message/addMemberOnChat`, {
      userId: senderId,
      posterId: receiverId,
    });
    if (res.data.success) {
      console.log(res.data.data);
      setChatUserListLoading(false);
      setChatUserList(res.data.data);
    } else {
      toast.error(res.data.error);
    }
  };

  return (
    <Styled.MessageRoomWrapper>
      <Styled.MessageUserListWrapper>
        <div className="user-search">
          <IoIosSearch size={24} color="#afafaf" />
          <input type="text" placeholder="Search..." />
        </div>
        <div className="user-list">
          {chatUserListLoading ? (
            <h5>Loading...</h5>
          ) : chatUserList.length > 0 ? (
            chatUserList.map((item: any, key: number) => (
              <React.Fragment key={key}>
                <Styled.MessageUserListItem>
                  {item.avatar ? (
                    <Image
                      src={SERVER_UPLOAD_URI + item.avatar}
                      alt="avatar"
                      width={50}
                      height={50}
                    />
                  ) : (
                    <h6>
                      {" "}
                      {item.firstName[0].toString().toUpperCase() +
                        item.lastName[0].toString().toUpperCase()}
                    </h6>
                  )}
                  <div>
                    <h3>{item.firstName + " " + item.lastName}</h3>
                  </div>
                </Styled.MessageUserListItem>
              </React.Fragment>
            ))
          ) : (
            <h5>No chat History</h5>
          )}
          {/* {chatUserList.length && chatUserList[0].avatar && (
            
          )} */}
        </div>
      </Styled.MessageUserListWrapper>
      <Styled.MessageContainer>
        <div className="messages-wrapper">
          <div className="message-form from">
            <Image
              src={"/assets/images/user.png"}
              alt="avatar"
              width={40}
              height={40}
            />
            <div>
              <h3>Andrew</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="message-form to">
            <Image
              src={"/assets/images/user.png"}
              alt="avatar"
              width={40}
              height={40}
            />
            <div>
              <h3>You</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
        <div className="input-wrapper">
          <ImAttachment size={24} />
          <input type="text" placeholder="Write a message..." />
          <div>
            <GrEmoji size={24} />
            <IoIosSend size={24} />
          </div>
        </div>
      </Styled.MessageContainer>
      <Styled.MessageUserInfoWrapper>
        <Image
          src={"/assets/images/user-lg.png"}
          alt="avatar"
          width={359}
          height={337}
        />
        <div className="user-info">
          <div className="username">
            <h2>
              Lolla Smith
              <span>20 posts</span>
            </h2>
            <a href={`tel:+18888888888`} target="_blank">
              <MdPhone size={30} color={"#82FF20"} />
            </a>
          </div>
          <p>
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
            }
          </p>
          <div className="location">
            <MdLocationOn size={24} />
            <span>Las Vegas, NV, US</span>
          </div>
          <div className="reviews">
            <Rating
              initialValue={4.9}
              size={24}
              disableFillHover
              allowHover={false}
              readonly
              onClick={() => {}}
            />
            <p>{4.9}</p>
            <span>{`(${23} Reviews)`}</span>
          </div>
        </div>
        <div className="write-review">
          <h3>Write Reviews</h3>
          <div className="score-review">
            <span>Score: </span>
            <Rating
              initialValue={0}
              size={36}
              onClick={(e) => console.log(e)}
            />
          </div>
          <div className="review-textbox">
            <p>Review:</p>
            <textarea placeholder="Write Review here..." />
            <span>0 / 5000</span>
          </div>
          <button>Save</button>
        </div>
      </Styled.MessageUserInfoWrapper>
    </Styled.MessageRoomWrapper>
  );
};
