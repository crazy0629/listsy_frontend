import React from "react";
import { AppLayout } from "@/layouts";
import { DiyCraftSection } from "@/modules/main/DiyCraft";

const DiyJewelry: React.FC = () => {
  return (
    <AppLayout name="diy_jewelry">
      <DiyCraftSection page="/for-sale/jewelry-making-supplies" />
    </AppLayout>
  );
};

export default DiyJewelry;
