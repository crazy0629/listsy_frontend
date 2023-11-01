import React, { useContext, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
  FaGoogle,
  FaBuilding,
  FaCarSide,
  FaShoppingBag,
  FaRegQuestionCircle,
} from "react-icons/fa";
import {
  MdLocationOn,
  MdSearch,
  MdOutlineKeyboardArrowDown,
  MdHome,
  MdShoppingCartCheckout,
  MdPets,
  MdOutlineEmojiEmotions,
} from "react-icons/md";
import { Tooltip as ReactTooltip } from "react-tooltip";

import { RiMessage2Fill, RiServiceLine } from "react-icons/ri";
import { PiPlusBold } from "react-icons/pi";
import * as Styled from "./layout.styles";
import { toast } from "react-toastify";
import axios from "axios";
import { SERVER_URI, SERVER_UPLOAD_URI } from "@/config";
import { Auth as AuthContext } from "@/context/contexts";
import Image from "next/image";
import { calcCompareTime } from "@/utils";
import { CommunityViewModal } from "@/modules/community";
import { useRouter } from "next/router";

const EmojiPicker = dynamic(() => import("emoji-picker-react"), { ssr: false });

const mainNav = [
  {
    label: "Home",
    href: "/",
    icon: <MdHome />,
  },
  {
    label: "Items For Sale",
    href: "/sales",
    icon: <MdShoppingCartCheckout />,
  },
  {
    label: "Real Estate",
    href: "/estate",
    icon: <FaBuilding />,
  },
  {
    label: "Vehicles",
    href: "/trucks",
    icon: <FaCarSide />,
  },
  {
    label: "Services",
    href: "/services",
    icon: <RiServiceLine />,
  },
  {
    label: "Pets",
    href: "/pets",
    icon: <MdPets />,
  },
  {
    label: "Jobs",
    href: "/jobs",
    icon: <FaShoppingBag />,
  },
];

export const AppSidebar: React.FC = () => {
  const { authContext } = useContext<any>(AuthContext);
  const [emojiShow, setEmojiShow] = useState(false);
  const [communityShow, setCommunityShow] = useState(false);
  const [communityValue, setCommunityValue] = useState("");
  const [initCommunityData, setInitCommunityData] = useState<any>([]);
  const [communityModal, setCommunityModal] = useState(false);
  const [communityLoading, setCommunityLoading] = useState(true);
  const emojiRef = useRef<any>(null);
  const communityRef = useRef<any>(null);
  const router = useRouter();

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
    const handleClickOutside = (event: any) => {
      if (
        communityRef.current &&
        !communityRef.current.contains(event.target)
      ) {
        setCommunityShow(false);
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [communityRef]);

  useEffect(() => {
    getInitialCommunity();
  }, []);

  const getInitialCommunity = async () => {
    setCommunityLoading(true);
    const res = await axios.post(`${SERVER_URI}/community/getLatest`);
    if (res.data.success) {
      setCommunityLoading(false);
      setInitCommunityData(res.data.data);
    } else {
      toast.error(res.data.message);
    }
  };

  const handleAddCommunity = async () => {
    if (authContext.user) {
      if (!communityValue) {
        toast.error("Please enter some contect to textbox.");
      } else {
        const res = await axios.post(`${SERVER_URI}/community/add`, {
          userId: authContext.user?.id,
          title: communityValue,
          userFullName:
            authContext.user?.firstName + authContext.user?.lastName,

          postDate: Date.now(),
        });
        if (res.data.success) {
          toast.success(res.data.message);
          setInitCommunityData(res.data.model);
          setCommunityShow(false);
          setCommunityValue("");
        } else {
          toast.error(res.data.message);
        }
      }
    } else {
      toast.error("Please Sign In");
      router.push("/auth/login");
    }
  };

  return (
    <Styled.AppSidebarWrapper>
      <CommunityViewModal
        onClose={() => setCommunityModal(false)}
        open={communityModal}
      />
      <Styled.AppSidebarContainer>
        <Styled.SidebarCountrySelect>
          <p>
            <MdLocationOn size={15} />
            <span>Las Vegas, NV, United States</span>
            <MdOutlineKeyboardArrowDown size={15} />
          </p>
        </Styled.SidebarCountrySelect>
        <div>
          {mainNav.map((item, key) => (
            <Styled.SidebarMainNavItem href={item.href} key={key}>
              {item.icon}
              <span>{item.label}</span>
            </Styled.SidebarMainNavItem>
          ))}
        </div>
        <Styled.SidebarCommunity>
          <h1>
            <span>Community</span>
            <PiPlusBold
              size={20}
              onClick={() => {
                setCommunityValue("");
                setCommunityShow(true);
              }}
            />
          </h1>
          <div>
            {communityLoading ? (
              <h5>Loading...</h5>
            ) : initCommunityData.length > 0 ? (
              initCommunityData.map((item: any, key: number) => (
                <React.Fragment key={key}>
                  <Styled.CommunityItem
                    data-tooltip-id={"community-title-" + key}
                  >
                    <div>
                      {item.userId?.avatar ? (
                        <Image
                          src={SERVER_UPLOAD_URI + item.userId.avatar}
                          alt="avatar"
                          width={24}
                          height={24}
                        />
                      ) : (
                        <h5>
                          {item.userId?.firstName[0].toString().toUpperCase() +
                            item.userId?.lastName[0].toString().toUpperCase()}
                        </h5>
                      )}

                      <p>
                        {item.userId?.firstName + " " + item.userId?.lastName}
                      </p>
                    </div>
                    <span>
                      {calcCompareTime(new Date().toString(), item.postDate)}
                    </span>
                    <ReactTooltip
                      id={"community-title-" + key}
                      place="top"
                      content={item.title}
                      style={{ width: 240, textAlign: "center" }}
                    />
                  </Styled.CommunityItem>
                </React.Fragment>
              ))
            ) : (
              <h5>No Community</h5>
            )}
            <Styled.CommunityItem onClick={() => setCommunityModal(true)}>
              <div>
                <MdSearch size={24} />
                <p>Browse Community</p>
              </div>
            </Styled.CommunityItem>
          </div>

          <Styled.AddCommunityPopup
            ref={communityRef}
            className={communityShow ? "show" : ""}
          >
            <div className="text-wrapper">
              <textarea
                placeholder="Write some text..."
                onChange={(e) =>
                  e.target.value.length <= 5000 &&
                  setCommunityValue(e.target.value)
                }
                value={communityValue}
              ></textarea>
              <span>{communityValue.length} / 5000</span>
            </div>
            <div className="action-wrapper">
              <Styled.EmojiWrapper>
                <MdOutlineEmojiEmotions
                  size={24}
                  onClick={() => setEmojiShow((prev) => !prev)}
                />
                <div className={emojiShow ? "show" : ""} ref={emojiRef}>
                  <EmojiPicker
                    onEmojiClick={(e) =>
                      setCommunityValue((prev) => prev + e.emoji)
                    }
                    searchDisabled
                    skinTonesDisabled
                    autoFocusSearch={false}
                    // emojiStyle={EmojiStyle.NATIVE}
                  />
                </div>
              </Styled.EmojiWrapper>
              <button onClick={handleAddCommunity}>Add Community</button>
            </div>
          </Styled.AddCommunityPopup>
        </Styled.SidebarCommunity>
        <div>
          <Styled.SidebarMainNavItem href={"/help"}>
            <FaRegQuestionCircle />
            <span>Help</span>
          </Styled.SidebarMainNavItem>
          <Styled.SidebarMainNavItem href={"/feedback"}>
            <RiMessage2Fill />
            <span>Feedback</span>
          </Styled.SidebarMainNavItem>
        </div>
      </Styled.AppSidebarContainer>
      <Styled.AppSidebarFooter>
        <Styled.SidebarFooterNav>
          <a href="#">About</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Notice</a>
        </Styled.SidebarFooterNav>
        <h1>@2023 Listsy</h1>
        <Styled.SidebarSocialNav>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaFacebookSquare />
          </a>
          <a href="#">
            <FaGoogle />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
        </Styled.SidebarSocialNav>
      </Styled.AppSidebarFooter>
    </Styled.AppSidebarWrapper>
  );
};
