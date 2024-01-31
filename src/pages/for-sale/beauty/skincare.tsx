import React from "react";
import { AppLayout } from "@/layouts";
import { BeautySection } from "@/modules/main/Beauty";

const BeautySkincard: React.FC = () => {
  return (
    <AppLayout name="beauty_skincard">
      <BeautySection page="/for-sale/beauty/skincare" />
    </AppLayout>
  );
};

export default BeautySkincard;
