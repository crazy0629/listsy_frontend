import React from "react";
import { AppLayout } from "@/layouts";
import { BeautySection } from "@/modules/main/Beauty";

const BeautyAll: React.FC = () => {
  return (
    <AppLayout name="beauty_all">
      <BeautySection page="/for-sale/beauty-personal-care" />
    </AppLayout>
  );
};

export default BeautyAll;
