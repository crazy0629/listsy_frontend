import React from "react";
import { AppLayout } from "@/layouts";
import { BeautySection } from "@/modules/main/Beauty";

const BeautyMakeup: React.FC = () => {
  return (
    <AppLayout name="beauty_makeup">
      <BeautySection page="/for-sale/beauty/makeup" />
    </AppLayout>
  );
};

export default BeautyMakeup;
