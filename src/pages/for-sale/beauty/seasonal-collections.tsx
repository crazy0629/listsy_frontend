import React from "react";
import { AppLayout } from "@/layouts";
import { BeautySection } from "@/modules/main/Beauty";

const BeautySeasonal: React.FC = () => {
  return (
    <AppLayout name="beauty_seasonal">
      <BeautySection page="/for-sale/beauty/seasonal-collections" />
    </AppLayout>
  );
};

export default BeautySeasonal;
