import React, { useContext, useState } from "react";
import Image from "next/image";
import axios from "axios";
import * as Styled from "./profile.styles";
import { AiOutlineCamera } from "react-icons/ai";
import { Auth as AuthContext } from "@/context/contexts";
import { useRouter } from "next/router";
import { ConfirmModal } from "@/components";
import { toast } from "react-toastify";
import { SERVER_UPLOAD_URI, SERVER_URI } from "@/config";
import FileResizer from "react-image-file-resizer";

type Props = {
  page: "setting" | "changePassword" | "posts";
};

const sidebarNavs = [
  {
    page: "setting",
    label: "Profile Setting",
    href: "/profile",
  },
  {
    page: "posts",
    label: "My Posts",
    href: "/profile/posts",
  },
  {
    page: "changePassword",
    label: "Change Password",
    href: "/profile/change-password",
  },
];

export const Sidebar: React.FC<Props> = ({ page }) => {
  const router = useRouter();
  const [deleteConfirmModal, setDeleteConfirmModal] = useState(false);
  const { authContext, setAuthContext } = useContext<any>(AuthContext);
  const [password, setPassword] = useState("");

  const handleDeleteAccount = async () => {
    if (!password) {
      toast.error("Enter your password");
    } else {
      const res = await axios.post(`${SERVER_URI}/profile/deleteAccount`, {
        userId: authContext.user?.id,
        password,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        localStorage.removeItem("token");
        setAuthContext((prev: any) => ({ ...prev, user: null }));
        router.push("/auth/login");
      } else {
        toast.error(res.data.message);
      }
    }
  };

  // const resizeFile = (file: any) =>
  //   new Promise((resolve) => {
  //     FileResizer.imageFileResizer(
  //       file,
  //       300,
  //       300,
  //       "JPEG",
  //       100,
  //       0,
  //       (uri) => {
  //         resolve(uri);
  //       },
  //       "base64"
  //     );
  //   });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const formData = new FormData();
      formData.append("avatar", e.target.files[0]);
      formData.append("userId", authContext.user?.id);
      const res = await axios.post(`${SERVER_URI}/profile/avatar`, formData);
      if (res.data.success) {
        toast.success(res.data.message);
        setAuthContext((prev: any) => ({ ...prev, user: res.data.data }));
        localStorage.setItem("token", res.data.token);
      } else {
        toast.error(res.data.message);
      }
    }
  };

  return (
    <>
      <ConfirmModal
        open={deleteConfirmModal}
        onCancel={() => setDeleteConfirmModal(false)}
        onOk={handleDeleteAccount}
        type="error"
        description="Are you sure that you want to delete your account? This will immediately log you out of your account and you will not be able to log in again."
        title="Delete Account"
        content={
          <Styled.ConfirmPasswordWrapper>
            <p>Password : </p>
            <input
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Styled.ConfirmPasswordWrapper>
        }
      />
      <Styled.SidebarWrapper>
        <Styled.ProfileAvatarWrapper>
          {authContext.user?.avatar ? (
            <Image
              src={SERVER_UPLOAD_URI + authContext.user?.avatar}
              alt="user avatar"
              width={150}
              height={150}
            />
          ) : (
            <Styled.EmptyAvatar>
              {authContext.user?.firstName[0].toString().toUpperCase() +
                authContext.user?.lastName[0].toString().toUpperCase()}
            </Styled.EmptyAvatar>
          )}
          <label id="upload-avatar">
            <input
              type="file"
              id="upload-avatar"
              // hidden
              style={{ display: "none" }}
              onChange={handleFileChange}
              accept="image/png, image/gif, image/jpeg, image/avif, image/webp"
            />
            <AiOutlineCamera size={24} color="#fff" />
          </label>
        </Styled.ProfileAvatarWrapper>
        <h1>
          {authContext.user?.firstName + " " + authContext.user?.lastName}
        </h1>
        <h6>{authContext.user?.email}</h6>
        {authContext.user?.bio && <p>{authContext.user?.bio}</p>}
        <Styled.SidebarNavWrapper>
          {sidebarNavs.map((item, key) => (
            <Styled.NavItem
              key={key}
              active={page === item.page ? "true" : undefined}
              onClick={() => router.push(item.href)}
            >
              {item.label}
            </Styled.NavItem>
          ))}
          <Styled.NavItem
            className="delete"
            onClick={() => setDeleteConfirmModal(true)}
          >
            Delete Account
          </Styled.NavItem>
        </Styled.SidebarNavWrapper>
      </Styled.SidebarWrapper>
    </>
  );
};
