import React from "react";
import { AppLayout } from "@/layouts";
import { DiyCraftSection } from "@/modules/main/DiyCraft";

const DiyWoodworking: React.FC = () => {
  return (
    <AppLayout name="diy_woodworking">
      <DiyCraftSection page="/for-sale/woodworking-carpentry-tools" />
    </AppLayout>
  );
};

export default DiyWoodworking;
