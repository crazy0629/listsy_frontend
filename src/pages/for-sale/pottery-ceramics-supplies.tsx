import React from "react";
import { AppLayout } from "@/layouts";
import { DiyCraftSection } from "@/modules/main/DiyCraft";

const DiyPottery: React.FC = () => {
  return (
    <AppLayout name="diy_pottery">
      <DiyCraftSection page="/for-sale/pottery-ceramics-supplies" />
    </AppLayout>
  );
};

export default DiyPottery;
