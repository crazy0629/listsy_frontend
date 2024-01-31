import React from "react";
import { AppLayout } from "@/layouts";
import { DiyCraftSection } from "@/modules/main/DiyCraft";

const DiyAll: React.FC = () => {
  return (
    <AppLayout name="diy_all">
      <DiyCraftSection page="/for-sale/diy-craft-items" />
    </AppLayout>
  );
};

export default DiyAll;
