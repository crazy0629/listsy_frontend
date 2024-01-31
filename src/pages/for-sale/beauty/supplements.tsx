import React from "react";
import { AppLayout } from "@/layouts";
import { BeautySection } from "@/modules/main/Beauty";

const BeautySupplements: React.FC = () => {
  return (
    <AppLayout name="beauty_supplements">
      <BeautySection page="/for-sale/beauty/supplements" />
    </AppLayout>
  );
};

export default BeautySupplements;
