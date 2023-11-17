import React from "react";
import * as Styled from "./profile.styles";
import { ChangePassword, MyPosts, ProfileSetting, Sidebar } from ".";

type Props = {
  page: "setting" | "changePassword" | "posts";
  category: String;
};

export const MainSection: React.FC<Props> = ({
  page = "setting",
  category = "",
}) => {
  return (
    <Styled.ProfilePageWrapper>
      <Sidebar page={page} />
      <Styled.MainSectionWrapper>
        {page === "setting" && <ProfileSetting />}
        {page === "posts" && <MyPosts category={category} />}
        {page === "changePassword" && <ChangePassword />}
      </Styled.MainSectionWrapper>
    </Styled.ProfilePageWrapper>
  );
};
