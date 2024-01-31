import React from "react";
import { AppLayout } from "@/layouts";
import { BeautySection } from "@/modules/main/Beauty";

const BeautyHair: React.FC = () => {
  return (
    <AppLayout name="beauty_hair">
      <BeautySection page="/for-sale/beauty/hair-care" />
    </AppLayout>
  );
};

export default BeautyHair;
