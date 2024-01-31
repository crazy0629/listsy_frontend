import React from "react";
import { AppLayout } from "@/layouts";
import { BeautySection } from "@/modules/main/Beauty";

const BeautyBath: React.FC = () => {
  return (
    <AppLayout name="beauty_bath">
      <BeautySection page="/for-sale/beauty/bath-body" />
    </AppLayout>
  );
};

export default BeautyBath;
