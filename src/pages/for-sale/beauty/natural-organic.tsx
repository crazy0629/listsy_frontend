import React from "react";
import { AppLayout } from "@/layouts";
import { BeautySection } from "@/modules/main/Beauty";

const BeautyNatural: React.FC = () => {
  return (
    <AppLayout name="beauty_natural">
      <BeautySection page="/for-sale/beauty/natural-organic" />
    </AppLayout>
  );
};

export default BeautyNatural;
