import React, { useEffect, useRef, useState, useContext } from "react";
import Image from "next/image";
import {
  IoMdMenu,
  IoIosSearch,
  IoMdNotificationsOutline,
  IoIosClose,
} from "react-icons/io";
import { TbLogin, TbUserPlus, TbUser, TbLogout } from "react-icons/tb";
import * as Styled from "./layout.styles";
import Link from "next/link";
import { Auth as AuthContext } from "@/context/contexts";
import { useRouter } from "next/router";
import { SERVER_UPLOAD_URI, SERVER_URI } from "@/config";
import { toast } from "react-toastify";
import { UploadModal } from "@/modules/upload";
import { ConfirmModal } from "@/components";
import axios from "axios";
import { MdMailOutline, MdPlayCircle } from "react-icons/md";

export const Header: React.FC<{
  onSidebar: () => void;
}> = ({ onSidebar }) => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [uploadModal, setUploadModal] = useState(false);
  const [uploadCancelModal, setUploadCancelModal] = useState(false);
  const [uploadInfo, setUploadInfo] = useState({ adId: "", adType: "" });
  const { authContext, setAuthContext } = useContext<any>(AuthContext);
  const wrapperRef = useRef<any>(null);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setVisible(false);
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    if (authContext.user) {
      setCurrentUser(authContext.user);
    } else {
      setCurrentUser(null);
    }
  }, [authContext]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuthContext((prev: any) => ({ ...prev, user: null }));
    router.push("/");
  };

  const handleUploadClick = () => {
    if (currentUser) {
      setUploadModal(true);
    } else {
      toast.error("Please Sign In");
      router.push("/auth/login");
    }
  };

  const handleUploadCancel = async () => {
    if (uploadInfo.adId) {
      const res = await axios.post(`${SERVER_URI}/upload/cancel`, uploadInfo);
      if (res.data.success) {
        setUploadModal(false);
      } else {
        toast.error(res.data.message);
      }
      setUploadCancelModal(false);
    } else {
      setUploadModal(false);
      setUploadCancelModal(false);
    }
  };

  return (
    <Styled.HeaderWrapper>
      <ConfirmModal
        onCancel={() => setUploadCancelModal(false)}
        open={uploadCancelModal}
        cancelText="No"
        okText="Yes"
        onOk={handleUploadCancel}
        type="warning"
        description=""
        title="Are You Sure You Want to Cancel?"
      />
      <UploadModal
        open={uploadModal}
        onClose={(adId, adType) => {
          setUploadInfo({ adId, adType });
          setUploadCancelModal(true);
        }}
        onFinish={(category: string) => {
          setUploadModal(false);
          router.push(`/profile/posts/${category}`);
        }}
      />
      <Styled.HeaderLogoWrapper>
        <div>
          <IoMdMenu size={20} onClick={onSidebar} />
        </div>
        <Image
          src="/assets/images/logo.png"
          width={113}
          height={43}
          alt="App logo"
          onClick={() => router.push("/")}
        />
      </Styled.HeaderLogoWrapper>
      <Styled.HeaderNavWrapper>
        <Styled.HeaderSearchInput className={mobileSearch ? "show" : ""}>
          <input type="text" placeholder="Search..." onChange={() => {}} />
          <IoIosSearch size={20} color="#AFAFAF" className="search-icon" />
          <IoIosClose
            size={30}
            color="#AFAFAF"
            className="close-icon"
            onClick={() => setMobileSearch(false)}
          />
        </Styled.HeaderSearchInput>
        <Styled.HeaderMobileSearchIcon onClick={() => setMobileSearch(true)}>
          <IoIosSearch size={20} color="#AFAFAF" className="search-icon" />
        </Styled.HeaderMobileSearchIcon>
        <div className="icon-wrapper upload">
          {/* <AiOutlinePlusCircle size={24} onClick={handleUploadClick} /> */}
          <h5 onClick={handleUploadClick}>
            <MdPlayCircle size={16} color="#ff923f" /> List With Video
          </h5>
        </div>
        {currentUser && (
          <>
            <div
              className="icon-wrapper message"
              onClick={() => router.push("/message")}
            >
              <MdMailOutline size={20} />
              {<span />}
            </div>

            <div className="icon-wrapper">
              <IoMdNotificationsOutline size={20} />
              <span />
            </div>
          </>
        )}
        <Styled.AuthActionWrapper ref={wrapperRef}>
          <Styled.AuthActionButton onClick={() => setVisible((prev) => !prev)}>
            {currentUser ? (
              currentUser?.avatar ? (
                <Image
                  src={SERVER_UPLOAD_URI + currentUser?.avatar}
                  alt="user avatar"
                  width={32}
                  height={32}
                />
              ) : (
                // <Styled.EmptyAvatar>
                currentUser?.firstName[0].toString().toUpperCase() +
                currentUser?.lastName[0].toString().toUpperCase()
                // </Styled.EmptyAvatar>
              )
            ) : (
              <TbUser size={16} />
            )}
          </Styled.AuthActionButton>
          {currentUser ? (
            <Styled.AuthListWrapper visible={visible ? "true" : undefined}>
              <Link href={"/profile"}>
                <TbUser size={24} />
                <span>Profile</span>
              </Link>
              <p onClick={handleLogout}>
                <TbLogout size={24} />
                <span>Logout</span>
              </p>
            </Styled.AuthListWrapper>
          ) : (
            <Styled.AuthListWrapper visible={visible ? "true" : undefined}>
              <Link href={"/auth/login"}>
                <TbLogin size={24} />
                <span>Sign In</span>
              </Link>
              <Link href={"/auth/register"}>
                <TbUserPlus size={24} />
                <span>Sign Up</span>
              </Link>
            </Styled.AuthListWrapper>
          )}
        </Styled.AuthActionWrapper>
      </Styled.HeaderNavWrapper>
    </Styled.HeaderWrapper>
  );
};
