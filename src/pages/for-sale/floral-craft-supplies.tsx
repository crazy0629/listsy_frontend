import React from "react";
import { AppLayout } from "@/layouts";
import { DiyCraftSection } from "@/modules/main/DiyCraft";

const DiyFloral: React.FC = () => {
  return (
    <AppLayout name="diy_floral">
      <DiyCraftSection page="/for-sale/floral-craft-supplies" />
    </AppLayout>
  );
};

export default DiyFloral;
