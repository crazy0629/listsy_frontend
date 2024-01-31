import React from "react";
import { AppLayout } from "@/layouts";
import { DiyCraftSection } from "@/modules/main/DiyCraft";

const DiyOther: React.FC = () => {
  return (
    <AppLayout name="diy_other">
      <DiyCraftSection page="/for-sale/other-craft-items" />
    </AppLayout>
  );
};

export default DiyOther;
