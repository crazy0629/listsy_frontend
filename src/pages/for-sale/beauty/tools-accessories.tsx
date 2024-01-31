import React from "react";
import { AppLayout } from "@/layouts";
import { BeautySection } from "@/modules/main/Beauty";

const BeautyTools: React.FC = () => {
  return (
    <AppLayout name="beauty_tools">
      <BeautySection page="/for-sale/beauty/tools-accessories" />
    </AppLayout>
  );
};

export default BeautyTools;
