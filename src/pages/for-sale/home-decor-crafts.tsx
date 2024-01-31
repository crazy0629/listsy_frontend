import React from "react";
import { AppLayout } from "@/layouts";
import { DiyCraftSection } from "@/modules/main/DiyCraft";

const DiyHome: React.FC = () => {
  return (
    <AppLayout name="diy_home">
      <DiyCraftSection page="/for-sale/home-decor-crafts" />
    </AppLayout>
  );
};

export default DiyHome;
