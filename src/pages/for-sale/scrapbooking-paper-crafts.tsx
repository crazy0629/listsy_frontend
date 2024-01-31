import React from "react";
import { AppLayout } from "@/layouts";
import { DiyCraftSection } from "@/modules/main/DiyCraft";

const DiyScrapbooking: React.FC = () => {
  return (
    <AppLayout name="diy_scrapbooking">
      <DiyCraftSection page="/for-sale/scrapbooking-paper-crafts" />
    </AppLayout>
  );
};

export default DiyScrapbooking;
