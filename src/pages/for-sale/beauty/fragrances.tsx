import React from "react";
import { AppLayout } from "@/layouts";
import { BeautySection } from "@/modules/main/Beauty";

const BeautyFragrances: React.FC = () => {
  return (
    <AppLayout name="beauty_Fragrances">
      <BeautySection page="/for-sale/beauty/fragrances" />
    </AppLayout>
  );
};

export default BeautyFragrances;
