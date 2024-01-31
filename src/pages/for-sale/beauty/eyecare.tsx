import React from "react";
import { AppLayout } from "@/layouts";
import { BeautySection } from "@/modules/main/Beauty";

const BeautyEyecare: React.FC = () => {
  return (
    <AppLayout name="beauty_eyecare">
      <BeautySection page="/for-sale/beauty/eyecare" />
    </AppLayout>
  );
};

export default BeautyEyecare;
