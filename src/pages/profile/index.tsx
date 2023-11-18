import { AppLayout } from "@/layouts";
import { MainSection } from "@/modules/profile/MainSection";
import React from "react";

const Profile: React.FC = () => {
  return (
    <AppLayout name="profile" noSidebar>
      <MainSection page="setting" category="" />
    </AppLayout>
  );
};

export default Profile;
