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
  FaRegQuestionCircle,
  FaArtstation,
  FaBook,
} from "react-icons/fa";
import {
  MdLocationOn,
  MdSearch,
  MdHome,
  MdShoppingCartCheckout,
  MdPets,
  MdOutlineEmojiEmotions,
} from "react-icons/md";
import { Tooltip as ReactTooltip } from "react-tooltip";
import {
  RiHomeOfficeFill,
  RiMessage2Fill,
  RiServiceLine,
} from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { IoCarSportSharp } from "react-icons/io5";
import { PiPlusBold } from "react-icons/pi";
import { FaChildren } from "react-icons/fa6";
import * as Styled from "./layout.styles";
import { toast } from "react-toastify";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { SERVER_URI, SERVER_UPLOAD_URI } from "@/config";
import { Auth as AuthContext } from "@/context/contexts";
import { CommunityViewModal } from "@/modules/community";
import { LocationModal } from "@/modules/location";
import { calcCompareTime } from "@/utils";

let Country = require("country-state-city").Country;
let State = require("country-state-city").State;
let City = require("country-state-city").City;

import { getCountries, getStates } from "country-state-picker";

// console.log(123123, Country.getAllCountries());
// console.log(234234, State.getAllStates());
// console.log(345345345, City.getCitiesOfCountry("KP"));

const EmojiPicker = dynamic(() => import("emoji-picker-react"), { ssr: false });

const mainNav = [
  {
    label: "Home",
    href: "/",
    icon: <MdHome />,
  },
  {
    label: "Vehicles",
    href: "/trucks",
    icon: <FaCarSide />,
  },
  {
    label: "Real Estate",
    href: "/estate",
    icon: <FaBuilding />,
  },
  {
    label: "Electronics and Appliances",
    href: "/sales",
    icon: <MdShoppingCartCheckout />,
  },
  {
    label: "Home and Garden",
    href: "/garden",
    icon: <RiHomeOfficeFill />,
  },
  {
    label: "Services",
    href: "/services",
    icon: <RiServiceLine />,
  },
  {
    label: "Fashion and Beauty",
    href: "/fashion",
    icon: <CiHeart />,
  },
  {
    label: "Sports and Leisure",
    href: "/sports",
    icon: <IoCarSportSharp />,
  },
  {
    label: "Children’s Items",
    href: "/children",
    icon: <FaChildren />,
  },
  {
    label: "Pets and Animals",
    href: "/pets",
    icon: <MdPets />,
  },
  {
    label: "Collectibles and Art",
    href: "/art",
    icon: <FaArtstation />,
  },
  {
    label: "Books and Education",
    href: "/education",
    icon: <FaBook />,
  },
  // {
  //   label: "Jobs",
  //   href: "/jobs",
  //   icon: <FaShoppingBag />,
  // },
];

export const AppSidebar: React.FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  const { authContext } = useContext<any>(AuthContext);
  const [emojiShow, setEmojiShow] = useState(false);
  const [communityShow, setCommunityShow] = useState(false);
  const [communityValue, setCommunityValue] = useState("");
  const [initCommunityData, setInitCommunityData] = useState<any>([]);
  const [communityModal, setCommunityModal] = useState(false);
  const [locationModal, setLocationModal] = useState(false);
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
    getLocation();
  }, []);

  const getLocation = async () => {
    // let countries = await getCountries();
    // console.log(countries);
    // let states = getStates("gb");
    // console.log(states);
  };

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

  const handleEmojiClick = (event: any) => {
    setCommunityValue((prev) => prev + event.emoji);
    setEmojiShow(false);
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
    <>
      <Styled.AppSidebarWrapper className={open ? "show" : ""}>
        <CommunityViewModal
          onClose={() => setCommunityModal(false)}
          open={communityModal}
        />
        <LocationModal
          open={locationModal}
          onClose={() => {
            setLocationModal(false);
          }}
        />
        <Styled.AppSidebarContainer>
          <Styled.SidebarCountrySelect>
            <p>
              <MdLocationOn size={15} />
              <span
                onClick={() => {
                  setLocationModal(true);
                }}
              >
                Las Vegas, NV, United States
              </span>
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
                            {item.userId?.firstName[0]
                              .toString()
                              .toUpperCase() +
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
                      onEmojiClick={(e) => {
                        handleEmojiClick(e);
                      }}
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
      <Styled.AppSidebarOverlay
        onClick={onClose}
        className={open ? "show" : ""}
      ></Styled.AppSidebarOverlay>
    </>
  );
};
