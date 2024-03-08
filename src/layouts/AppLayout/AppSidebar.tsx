import React, { useContext, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
  FaGoogle,
  FaRegQuestionCircle,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { MdLocationOn, MdSearch, MdOutlineEmojiEmotions } from "react-icons/md";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { RiMessage2Fill } from "react-icons/ri";
import { PiPlusBold } from "react-icons/pi";
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

const EmojiPicker = dynamic(() => import("emoji-picker-react"), { ssr: false });

const mainNav = [
  {
    label: "Home",
    href: "/",
    icon: "all",
  },
  {
    label: "Vehicles and Automotive",
    href: "/trucks",
    icon: "vehicles",
  },
  {
    label: "Real Estate and Property Listings",
    href: "/estate",
    icon: "realestate",
  },
  {
    label: "Electronics and Gadgets",
    href: "/for-sale/electronics/all",
    icon: "electronics",
  },
  {
    label: "Toys and Games",
    href: "/toys/toys-games-all",
    icon: "toys",
  },
  {
    label: "Pets and Pet Supplies",
    href: "/pets",
    icon: "pets",
  },
  {
    label: "Furniture and Home Decor",
    href: "/furniture-home-decor-for-sale/all-furniture",
    icon: "furniture",
  },
  {
    label: "Fashion and Apparel",
    href: "/fashion",
    icon: "fashion",
  },
  {
    label: "Beauty and Personal Care Products",
    href: "/for-sale/beauty-personal-care",
    icon: "beauty",
  },
  {
    label: "Sports and Fitness Equipment",
    href: "/sports-fitness-equipment-for-sale/all-equipments",
    icon: "sports",
  },
  {
    label: "Art and Collectibles",
    href: "/art-collectibles/all-items-for-sale",
    icon: "art",
  },
  {
    label: "Garden and Outdoor Equipment",
    href: "/garden-outdoor-equipment/all-items-for-sale",
    icon: "garden",
  },
  {
    label: "Musical Instruments",
    href: "/musical-instruments-for-sale/all-instruments",
    icon: "music",
  },
  {
    label: "Services and Experiences",
    href: "/services",
    icon: "service",
  },
  {
    label: "DIY and Craft Items",
    href: "/for-sale/diy-craft-items",
    icon: "craft",
  },
  {
    label: "Food and Culinary Products",
    href: "/culinary-products/world-cuisines",
    icon: "food",
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
  const [location, setLocation] = useState("");
  const [flagUrl, setFlagUrl] = useState("");
  const [isReadMore, setIsReadMore] = useState(true);

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
    setLocationInfo();
  }, []);

  const setLocationInfo = async () => {
    if (localStorage.getItem("locationSelected") == null) {
      const locationInfo = await axios.get(
        `https://api.ipdata.co?api-key=${process.env.NEXT_PUBLIC_IPDATA_API_KEY}`
      );
      setLocation(locationInfo.data.country_name);
      setFlagUrl(locationInfo.data.flag);
      localStorage.setItem("centerlat", locationInfo.data.latitude);
      localStorage.setItem("centerlng", locationInfo.data.longitude);
      localStorage.setItem("locationSelected", "false");
      localStorage.setItem("flagUrl", locationInfo.data.flag);
      localStorage.setItem("locationAddress", locationInfo.data.country_name);
      localStorage.setItem(
        "locationCountryCode",
        locationInfo.data.country_code
      );
      window.dispatchEvent(new Event("localStorageChanged"));
    } else {
      setFlagUrl(localStorage.getItem("flagUrl"));
      setLocation(localStorage.getItem("locationAddress"));
    }
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

  const chooseLocationHandle = (
    filterAddress: string,
    countryFlagUrl: string
  ) => {
    setLocationModal(false);
    setFlagUrl(countryFlagUrl);
    setLocation(filterAddress);
    localStorage.setItem("locationSelected", "true");
    localStorage.setItem("locationAddress", filterAddress);
    localStorage.setItem("flagUrl", countryFlagUrl);
    window.dispatchEvent(new Event("localStorageChanged"));
  };

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
      <Styled.AppSidebarWrapper className={open ? "show" : ""}>
        <CommunityViewModal
          onClose={() => setCommunityModal(false)}
          open={communityModal}
        />
        {locationModal && (
          <LocationModal open={locationModal} onChoose={chooseLocationHandle} />
        )}
        <Styled.AppSidebarContainer>
          <Styled.SidebarCountrySelect>
            <p>
              <MdLocationOn size={15} />
              <span
                onClick={() => {
                  setLocationModal(true);
                }}
              >
                {location}
              </span>
            </p>
            <img src={flagUrl} alt="" />
          </Styled.SidebarCountrySelect>
          <div>
            {mainNav
              .slice(0, isReadMore ? mainNav.length / 3 : mainNav.length)
              .map((item, key) => (
                <Styled.SidebarMainNavItem href={item.href} key={key}>
                  <Image
                    src={`/assets/images/categoryImage/${item.icon}.png`}
                    alt={`${item.icon}`}
                    width={24}
                    height={24}
                  />
                  <span>{item.label}</span>
                </Styled.SidebarMainNavItem>
              ))}
            <Styled.ShowMoreOrLess onClick={toggleReadMore}>
              <Image
                src={
                  isReadMore
                    ? `/assets/images/plus.png`
                    : `/assets/images/minus.png`
                }
                alt="showmore"
                width={20}
                height={20}
              />
              <span>{isReadMore ? "Show More" : " Show Less"}</span>
            </Styled.ShowMoreOrLess>
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
              <FaTiktok />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaYoutube />
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
