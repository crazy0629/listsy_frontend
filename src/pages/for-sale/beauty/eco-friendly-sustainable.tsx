import React from "react";
import { AppLayout } from "@/layouts";
import { BeautySection } from "@/modules/main/Beauty";

const BeautyEco: React.FC = () => {
  return (
    <AppLayout name="beauty_eco">
      <BeautySection page="/for-sale/beauty/eco-friendly-sustainable" />
    </AppLayout>
  );
};

export default BeautyEco;
