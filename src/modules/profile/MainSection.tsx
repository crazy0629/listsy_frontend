import React from "react";
import * as Styled from "./profile.styles";
import { ChangePassword, MyPosts, ProfileSetting, Sidebar } from ".";

type Props = {
  page: "setting" | "changePassword" | "posts";
};

export const MainSection: React.FC<Props> = ({ page = "setting" }) => {
  return (
    <Styled.ProfilePageWrapper>
      <Sidebar page={page} />
      <Styled.MainSectionWrapper>
        {page === "setting" && <ProfileSetting />}
        {page === "posts" && <MyPosts />}
        {page === "changePassword" && <ChangePassword />}
      </Styled.MainSectionWrapper>
    </Styled.ProfilePageWrapper>
  );
};
