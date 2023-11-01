import { AppLayout } from "@/layouts";
import { AdsDetailsSection } from "@/modules/ads";
import React from "react";

const AdsDetailsPage: React.FC = () => {
  return (
    <AppLayout name="ads_details" noSidebar={true}>
      <AdsDetailsSection />
    </AppLayout>
  );
};

export default AdsDetailsPage;
