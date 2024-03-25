import React from "react";
import { AppLayout } from "@/layouts";
import { DiyCraftSection } from "@/modules/main/DiyCraft";

const DiyJewellery: React.FC = () => {
  return (
    <AppLayout name="diy_Jewellery">
      <DiyCraftSection page="/for-sale/Jewellery-making-supplies" />
    </AppLayout>
  );
};

export default DiyJewellery;
