import React from "react";
import { AppLayout } from "@/layouts";
import { DiyCraftSection } from "@/modules/main/DiyCraft";

const DiyGlass: React.FC = () => {
  return (
    <AppLayout name="diy_glass">
      <DiyCraftSection page="/for-sale/glass-mosaic-crafts" />
    </AppLayout>
  );
};

export default DiyGlass;
