import React, { useContext, useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import * as Styled from "./message.styles";
import { IoIosSearch, IoIosSend } from "react-icons/io";
import Image from "next/image";
import { MdLocationOn, MdPhone } from "react-icons/md";
import { Rating } from "react-simple-star-rating";
import { ImAttachment } from "react-icons/im";
import { GrEmoji } from "react-icons/gr";
import { useRouter } from "next/router";
import { ORIGIN_SERVER_URI, SERVER_UPLOAD_URI, SERVER_URI } from "@/config";
import axios from "axios";
import { toast } from "react-toastify";
import { Auth as AuthContext } from "@/context/contexts";

import io from "socket.io-client";

const EmojiPicker = dynamic(() => import("emoji-picker-react"), { ssr: false });

export const MessageRoom: React.FC = () => {
  const router = useRouter();
  const { receiverId } = router.query;
  const { authContext } = useContext<any>(AuthContext);
  const [chatUserList, setChatUserList] = useState<Array<any>>([]);
  const [chatUserListLoading, setChatUserListLoading] = useState(true);
  const [currentChatUser, setCurrentChatUser] = useState<any>(null);
  const [messageContent, setMessageContent] = useState<any>("");
  const [files, setFiles] = useState<any[]>([]);
  const [emojiShow, setEmojiShow] = useState(false);
  const [messageHistory, setMessageHistory] = useState<any>([]);
  const emojiRef = useRef<any>(null);

  const [ws, setWs] = useState(null);

  const socket = io(ORIGIN_SERVER_URI, {
    query: { userId: authContext.user.id },
  });

  useEffect(() => {
    // Listen for server events

    socket.on("server", (data) => {
      console.log(123123123, data);
      setMessageHistory(data);
    });

    // Send a message to the server
    // socket.emit("message", "Hello from client");

    return () => {
      // Clean up socket connection
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (emojiRef.current && !emojiRef.current.contains(event.target)) {
        setEmojiShow(false);
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [emojiRef]);

  useEffect(() => {
    // if (receiverId) {
    getChatUserList();
    // }
  }, [receiverId]);

  useEffect(() => {
    var messageBody = document.querySelector(".messages-wrapper");
    messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
  }, [messageHistory]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFiles([...files, ...Array.from(e.target.files)]);
    }
  };

  const handleEmojiClick = (event: any) => {
    setMessageContent((prev) => prev + event.emoji);
    setEmojiShow(false);
  };

  const getChatUserList = async () => {
    setChatUserListLoading(true);
    const res = await axios.post(`${SERVER_URI}/message/addMemberOnChat`, {
      userId: authContext.user.id,
      posterId: receiverId ? receiverId : "no-user",
    });
    if (res.data.success) {
      setChatUserListLoading(false);
      setChatUserList(res.data.data);
      if (receiverId) {
        setCurrentChatUser(
          res.data.data.filter((item: any) => item._id == receiverId)[0]
        );
      }
      setMessageHistory(res.data.messages);
    } else {
      toast.error(res.data.error);
    }
  };

  const handleSendMsgButtonClicked = async (enteredText) => {
    if (files.length == 0 && enteredText == "") return;
    if (!receiverId) return;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("chatFiles", files[i]);
    }
    formData.append("message", enteredText);
    formData.append("senderId", authContext.user.id);
    formData.append("receiverId", receiverId.toString());
    formData.append("sentDate", Date.now().toString());

    const res = await axios.post(`${SERVER_URI}/message/add`, formData);
    if (res.data.success) {
      setMessageHistory(res.data.data);
    } else {
      toast.error(res.data.message);
    }
  };

  const handleKeyPress = async (event: any) => {
    if (event.key === "Enter") {
      const enteredText = event.target.value;
      await handleSendMsgButtonClicked(enteredText);
      setMessageContent("");
    }
  };

  const handleMessageChangle = (event: any) => {
    setMessageContent(event.target.value);
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
                <Styled.MessageUserListItem
                  className={item._id === currentChatUser?._id ? "active" : ""}
                  onClick={() => router.push(`/message/${item._id}`)}
                >
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
        </div>
      </Styled.MessageUserListWrapper>
      <Styled.MessageContainer>
        <div className="messages-wrapper">
          <div>
            {messageHistory.length > 1 ? (
              messageHistory.map((item: any, key: number) =>
                item.message != "" ? (
                  <React.Fragment key={key}>
                    <div
                      className={
                        item.receiverId._id == receiverId
                          ? "message-form to"
                          : "message-form from"
                      }
                    >
                      {item.receiverId._id == receiverId &&
                      item.senderId.avatar ? (
                        <Image
                          src={SERVER_UPLOAD_URI + item.senderId.avatar}
                          alt="avatar"
                          width={50}
                          height={50}
                        />
                      ) : item.receiverId._id == receiverId &&
                        !item.senderId.avatar ? (
                        <h6>
                          {item.senderId.firstName[0].toString().toUpperCase() +
                            item.senderId.lastName[0].toString().toUpperCase()}
                        </h6>
                      ) : item.senderId._id == receiverId &&
                        item.senderId.avatar ? (
                        <Image
                          src={SERVER_UPLOAD_URI + item.senderId.avatar}
                          alt="avatar"
                          width={50}
                          height={50}
                        />
                      ) : (
                        <h6>
                          {item.senderId.firstName[0].toString().toUpperCase() +
                            item.senderId.lastName[0].toString().toUpperCase()}
                        </h6>
                      )}

                      <div>
                        <h3>
                          {item.receiverId._id == receiverId
                            ? "You"
                            : `${
                                item.senderId.firstName +
                                " " +
                                item.senderId.lastName
                              }`}
                        </h3>
                        <p>{item.message}</p>
                      </div>
                    </div>
                  </React.Fragment>
                ) : (
                  <div key={key}></div>
                )
              )
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="input-wrapper">
          <Styled.MessageFileUploadWrapper htmlFor="upload-chatfiles">
            <ImAttachment size={24} />
            <input
              type="file"
              id="upload-chatfiles"
              style={{ display: "none" }}
              accept={"*"}
              onChange={handleFileChange}
              multiple
            />
          </Styled.MessageFileUploadWrapper>

          <input
            type="text"
            placeholder="Write a message..."
            value={messageContent}
            onChange={handleMessageChangle}
            onKeyDown={handleKeyPress}
          />
          <div className="message-emoji-picker">
            <GrEmoji size={24} onClick={() => setEmojiShow((prev) => !prev)} />
            <IoIosSend
              size={24}
              onClick={async () => {
                await handleSendMsgButtonClicked(messageContent);
                setMessageContent("");
              }}
            />
            <div ref={emojiRef} className={`${emojiShow ? "show" : ""}`}>
              <EmojiPicker
                onEmojiClick={(e) => {
                  handleEmojiClick(e);
                }}
                searchDisabled
                skinTonesDisabled
                autoFocusSearch={false}
              />
            </div>
          </div>
        </div>
      </Styled.MessageContainer>
      {currentChatUser && (
        <Styled.MessageUserInfoWrapper>
          {currentChatUser.avatar ? (
            <Image
              src={SERVER_UPLOAD_URI + currentChatUser.avatar}
              alt="avatar"
              width={359}
              height={337}
            />
          ) : (
            <h5>
              {currentChatUser.firstName[0].toUpperCase() +
                currentChatUser.lastName[0].toUpperCase()}
            </h5>
          )}
          {/* */}
          <div className="user-info">
            <div className="username">
              <h2>
                {currentChatUser.firstName + " " + currentChatUser.lastName}
                <span>20 ads posts</span>
              </h2>
              <a href={`tel:+18888888888`} target="_blank">
                <MdPhone size={30} color={"#82FF20"} />
              </a>
            </div>
            <p>{currentChatUser.bio}</p>
            <div className="reviews">
              <Rating
                initialValue={currentChatUser.reviewMark}
                size={24}
                disableFillHover
                allowHover={false}
                readonly
                onClick={() => {}}
              />
              <p>{currentChatUser.reviewMark}</p>
              <span>{`(${currentChatUser.reviewCount} Reviews)`}</span>
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
      )}
    </Styled.MessageRoomWrapper>
  );
};
