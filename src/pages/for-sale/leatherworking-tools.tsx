import React from "react";
import { AppLayout } from "@/layouts";
import { DiyCraftSection } from "@/modules/main/DiyCraft";

const DiyLeatherworking: React.FC = () => {
  return (
    <AppLayout name="diy_leatherworking">
      <DiyCraftSection page="/for-sale/leatherworking-tools" />
    </AppLayout>
  );
};

export default DiyLeatherworking;
