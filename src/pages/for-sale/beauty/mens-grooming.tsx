import React from "react";
import { AppLayout } from "@/layouts";
import { BeautySection } from "@/modules/main/Beauty";

const BeautyMens: React.FC = () => {
  return (
    <AppLayout name="beauty_mens">
      <BeautySection page="/for-sale/beauty/mens-grooming" />
    </AppLayout>
  );
};

export default BeautyMens;
