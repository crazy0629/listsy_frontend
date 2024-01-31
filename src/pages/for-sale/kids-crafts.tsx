import React from "react";
import { AppLayout } from "@/layouts";
import { DiyCraftSection } from "@/modules/main/DiyCraft";

const DiyKids: React.FC = () => {
  return (
    <AppLayout name="diy_kids">
      <DiyCraftSection page="/for-sale/kids-crafts" />
    </AppLayout>
  );
};

export default DiyKids;
