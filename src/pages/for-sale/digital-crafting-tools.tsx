import React from "react";
import { AppLayout } from "@/layouts";
import { DiyCraftSection } from "@/modules/main/DiyCraft";

const DiyDigital: React.FC = () => {
  return (
    <AppLayout name="diy_digital">
      <DiyCraftSection page="/for-sale/digital-crafting-tools" />
    </AppLayout>
  );
};

export default DiyDigital;
