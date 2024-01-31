import React from "react";
import { AppLayout } from "@/layouts";
import { BeautySection } from "@/modules/main/Beauty";

const BeautyWellness: React.FC = () => {
  return (
    <AppLayout name="beauty_wellness">
      <BeautySection page="/for-sale/beauty/wellness-products" />
    </AppLayout>
  );
};

export default BeautyWellness;
