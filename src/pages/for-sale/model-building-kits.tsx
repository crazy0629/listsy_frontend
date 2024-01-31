import React from "react";
import { AppLayout } from "@/layouts";
import { DiyCraftSection } from "@/modules/main/DiyCraft";

const DiyModel: React.FC = () => {
  return (
    <AppLayout name="diy_model">
      <DiyCraftSection page="/for-sale/model-building-kits" />
    </AppLayout>
  );
};

export default DiyModel;
