import React from "react";
import { AppLayout } from "@/layouts";
import { BeautySection } from "@/modules/main/Beauty";

const BeautyEthnic: React.FC = () => {
  return (
    <AppLayout name="beauty_ethnic">
      <BeautySection page="/for-sale/beauty/ethnic-products" />
    </AppLayout>
  );
};

export default BeautyEthnic;
