import React, { useContext, useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import * as Styled from "./message.styles";
import { IoIosSearch, IoIosSend } from "react-icons/io";
import Image from "next/image";
import { MdClose, MdLocationOn, MdPhone } from "react-icons/md";
import { Rating } from "react-simple-star-rating";
import { ImAttachment, ImUsers } from "react-icons/im";
import { GrEmoji } from "react-icons/gr";
import { useRouter } from "next/router";
import { SERVER_UPLOAD_URI, SERVER_URI } from "@/config";
import axios from "axios";
import { toast } from "react-toastify";
import { Auth as AuthContext } from "@/context/contexts";

import io from "socket.io-client";
import { BsCheck, BsCheck2All } from "react-icons/bs";

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
  const [isCurrentOpen, setIsCurrentOpen] = useState(true);
  const [isMobileUserList, setIsMobileUserList] = useState(false);

  const socket = io(SERVER_UPLOAD_URI, {
    query: { userId: authContext.user.id },
  });

  useEffect(() => {
    socket.on("server", async (data) => {
      // await getChatUserList();
    });

    socket.on("getChatUserList", (data) => {
      console.log(123123123, data);
      if (data.success) {
        setChatUserList(data.data);
        if (receiverId) {
          setCurrentChatUser(
            data.data.filter((item: any) => item._id == receiverId)[0]
          );
          // setMessageHistory(res.data.messages);
        }
        setChatUserListLoading(false);
      } else {
        setChatUserListLoading(false);
        toast.error(data.message);
      }
    });

    return () => {
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
    getChatUserList();
  }, [receiverId]);

  useEffect(() => {
    if (currentChatUser) {
      socket.emit("getMessageHistory");
    }
  }, [currentChatUser]);

  const getChatUserList = async () => {
    setChatUserListLoading(true);
    socket.emit("addChatUserList", {
      senderId: authContext.user.id,
      receiverId: receiverId ? receiverId : "no-user",
    });
    // const res = await axios.post(`${SERVER_URI}/message/addChatUserList`, {
    //   senderId: authContext.user.id,
    //   receiverId: receiverId ? receiverId : "no-user",
    // });

    // if (res.data.success) {
    //   setChatUserList(res.data.data);
    //   if (receiverId) {
    //     setCurrentChatUser(
    //       res.data.data.filter((item: any) => item._id == receiverId)[0]
    //     );
    //     // setMessageHistory(res.data.messages);
    //   }
    //   setChatUserListLoading(false);
    // } else {
    //   setChatUserListLoading(false);
    //   toast.error(res.data.error);
    // }
  };

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

  const handleSendMsgButtonClicked = async (enteredText) => {
    if (enteredText == "" || !receiverId) return;
    socket.emit("addMessage", {
      senderId: authContext.user.id,
      receiverId,
      message: enteredText,
    });
    // const res = await axios.post(`${SERVER_URI}/message/addMessage`, {
    //   senderId: authContext.user.id,
    //   receiverId,
    //   message: enteredText,
    // });

    // if (res.data.success) {
    //   setMessageHistory(res.data.data);
    // } else {
    //   toast.error(res.data.message);
    // }
  };

  const handleKeyPress = async (event: any) => {
    if (event.key === "Enter") {
      const enteredText = event.target.value;
      setMessageContent("");
      await handleSendMsgButtonClicked(enteredText);
    }
  };

  const handleMessageChangle = (event: any) => {
    setMessageContent(event.target.value);
  };

  /*
  const setMessageRead = (event: any) => {
    let data = messageHistory.filter(
      (item) =>
        item.receiverId._id == authContext.user.id && item.readState == false
    );
    if (data.length == 0) return;
    let idList: any = [];
    for (let index = 0; index < data.length; index++) {
      idList.push(data[index]._id);
    }

    axios.post(`${SERVER_URI}/message/markAsRead`, {
      idList,
      senderId: authContext.user.id,
      receiverId,
    });
  };
*/

  return (
    <Styled.MessageRoomWrapper>
      <div
        className={`mobile-user-list ${isMobileUserList ? "open" : ""}`}
        onClick={() => setIsMobileUserList((prev) => !prev)}
      >
        {isMobileUserList ? <MdClose size={24} /> : <ImUsers size={24} />}
      </div>
      <Styled.MessageUserListWrapper className={isMobileUserList ? "open" : ""}>
        <div className="user-search">
          <div>
            <IoIosSearch size={24} color="#afafaf" />
          </div>
          <input type="text" placeholder="Search..." />
        </div>
        <div className="user-list">
          {chatUserListLoading ? (
            <h5></h5>
          ) : chatUserList.length > 0 ? (
            chatUserList.map((item: any, key: number) => (
              <React.Fragment key={key}>
                <Styled.MessageUserListItem
                  className={item._id === currentChatUser?._id ? "active" : ""}
                  onClick={() => {
                    if (item._id === receiverId) {
                      setIsCurrentOpen(true);
                    } else {
                      router.push(`/message/${item._id}`);
                      setIsCurrentOpen(true);
                    }
                  }}
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
      <Styled.MessageUserListOverlay
        className={isMobileUserList ? "open" : ""}
        onClick={() => setIsMobileUserList(false)}
      ></Styled.MessageUserListOverlay>
      <Styled.MessageContainer>
        <div className="messages-wrapper">
          <div>
            {messageHistory.length > 0 ? (
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
                        <div>
                          <Image
                            src={SERVER_UPLOAD_URI + item.senderId.avatar}
                            alt="avatar"
                            width={50}
                            height={50}
                          />
                          {!item.readState ? (
                            <BsCheck color="green" size={20} />
                          ) : (
                            <BsCheck2All color="green" size={20} />
                          )}
                        </div>
                      ) : item.receiverId._id == receiverId &&
                        !item.senderId.avatar ? (
                        <div>
                          <h6>
                            {item.senderId.firstName[0]
                              .toString()
                              .toUpperCase() +
                              item.senderId.lastName[0]
                                .toString()
                                .toUpperCase()}
                          </h6>
                          {!item.readState ? (
                            <BsCheck color="green" size={24} />
                          ) : (
                            <BsCheck2All color="green" size={24} />
                          )}
                        </div>
                      ) : item.senderId._id == receiverId &&
                        item.senderId.avatar ? (
                        <div>
                          <Image
                            src={SERVER_UPLOAD_URI + item.senderId.avatar}
                            alt="avatar"
                            width={50}
                            height={50}
                          />
                        </div>
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
              // onClick={async () => {
              //   await handleSendMsgButtonClicked(messageContent);
              //   setMessageContent("");
              // }}
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
      <Styled.MessageUserInfoWrapper
        className={isCurrentOpen && currentChatUser ? "open" : ""}
      >
        {currentChatUser?.avatar ? (
          <Image
            src={SERVER_UPLOAD_URI + currentChatUser.avatar}
            alt="avatar"
            width={359}
            height={337}
          />
        ) : (
          <h5>
            {currentChatUser?.firstName[0].toUpperCase() +
              currentChatUser?.lastName[0].toUpperCase()}
          </h5>
        )}
        {/* */}
        <div className="user-info">
          <div className="username">
            <h2>
              {currentChatUser?.firstName + " " + currentChatUser?.lastName}
              <span>20 ads posts</span>
            </h2>
            <a href={`tel:+18888888888`} target="_blank">
              <MdPhone size={30} color={"#82FF20"} />
            </a>
          </div>
          <p>{currentChatUser?.bio}</p>
          <div className="reviews">
            <Rating
              initialValue={currentChatUser?.reviewMark}
              size={24}
              disableFillHover
              allowHover={false}
              readonly
              onClick={() => {}}
            />
            <p>{currentChatUser?.reviewMark}</p>
            <span>{`(${currentChatUser?.reviewCount} Reviews)`}</span>
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
      <Styled.MessageUseInfoOverlay
        className={isCurrentOpen && currentChatUser ? "open" : ""}
        onClick={() => setIsCurrentOpen(false)}
      ></Styled.MessageUseInfoOverlay>
    </Styled.MessageRoomWrapper>
  );
};
