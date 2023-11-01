import React, { useState, useEffect, useRef } from "react";
import * as Styled from "./room.styles";
import Image from "next/image";
import { ImAttachment } from "react-icons/im";
import { GrEmoji } from "react-icons/gr";
import { IoIosSend } from "react-icons/io";

export const CommunityRoom: React.FC = () => {
  const [userDropdown, setUserDropdown] = useState(false);
  const dropDownRef = useRef<any>(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (e: any) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setUserDropdown(false);
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropDownRef]);

  return (
    <Styled.CommunityRoomWrapper>
      <Styled.CommunityHeaderWraper>
        <div className="community-info">
          <Image
            src="/assets/images/user.png"
            alt="avatar"
            width={40}
            height={40}
          />
          <p>
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, whe..."
            }
          </p>
        </div>
        <Styled.UserListWrapper ref={dropDownRef}>
          <div
            onClick={() => setUserDropdown((prev) => !prev)}
            className="dropdown-button"
          >
            {[...new Array(3)].map((_, index) => (
              <Image
                src={"/assets/images/user.png"}
                alt="avatar"
                width={24}
                height={24}
                key={index}
              />
            ))}
            <span>203+</span>
          </div>
          <Styled.UserListDropDownWrapper
            className={userDropdown ? "open" : ""}
          >
            <div className="dropdown-search">
              <input type="text" placeholder="Email, Name Username" />
              <button>Search</button>
            </div>
            <div className="dropdown-list">
              {[...new Array(7)].map((_, index) => (
                <div className="dropdown-item" key={index}>
                  <Image
                    src={"/assets/images/user.png"}
                    alt="avatar"
                    width={40}
                    height={40}
                  />
                  <p>Ying Lynn</p>
                </div>
              ))}
              <span>Show more members...</span>
            </div>
          </Styled.UserListDropDownWrapper>
        </Styled.UserListWrapper>
      </Styled.CommunityHeaderWraper>
      <Styled.CommunityBodyWrapper>
        <Styled.CommunityChatCotainer>
          <div className="message-form from">
            <Image
              src={"/assets/images/user.png"}
              alt="avatar"
              width={40}
              height={40}
            />
            <div>
              <h3>James</h3>
              <p>
                {
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It hassurvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                }
              </p>
            </div>
          </div>
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
        </Styled.CommunityChatCotainer>
        <Styled.CommunityChatInputWrapper>
          <ImAttachment size={24} />
          <input type="text" placeholder="Write a message..." />
          <div>
            <GrEmoji size={24} />
            <IoIosSend size={24} />
          </div>
        </Styled.CommunityChatInputWrapper>
      </Styled.CommunityBodyWrapper>
    </Styled.CommunityRoomWrapper>
  );
};
