import React from "react";
import { AppLayout } from "@/layouts";
import { BeautySection } from "@/modules/main/Beauty";

const BeautyKids: React.FC = () => {
  return (
    <AppLayout name="beauty_kids">
      <BeautySection page="/for-sale/beauty/kids-baby-care" />
    </AppLayout>
  );
};

export default BeautyKids;
