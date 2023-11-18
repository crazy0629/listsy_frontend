import React from "react";
import { AppLayout } from "@/layouts";
import { MainSection } from "@/modules/profile/MainSection";

const ChangePasswordPage: React.FC = () => {
  return (
    <AppLayout name="profilePassword" noSidebar>
      <MainSection page="changePassword" category="" />
    </AppLayout>
  );
};

export default ChangePasswordPage;
