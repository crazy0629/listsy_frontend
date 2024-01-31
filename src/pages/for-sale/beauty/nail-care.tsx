import React from "react";
import { AppLayout } from "@/layouts";
import { BeautySection } from "@/modules/main/Beauty";

const BeautyNail: React.FC = () => {
  return (
    <AppLayout name="beauty_nail">
      <BeautySection page="/for-sale/beauty/nail-care" />
    </AppLayout>
  );
};

export default BeautyNail;
