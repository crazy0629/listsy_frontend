import React from "react";
import { AppLayout } from "@/layouts";
import { BeautySection } from "@/modules/main/Beauty";

const BeautySun: React.FC = () => {
  return (
    <AppLayout name="beauty_sun">
      <BeautySection page="/for-sale/beauty/sun-care" />
    </AppLayout>
  );
};

export default BeautySun;
