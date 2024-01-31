import React from "react";
import { AppLayout } from "@/layouts";
import { BeautySection } from "@/modules/main/Beauty";

const BeautyPersonal: React.FC = () => {
  return (
    <AppLayout name="beauty_personal">
      <BeautySection page="/for-sale/beauty/personal-hygiene" />
    </AppLayout>
  );
};

export default BeautyPersonal;
