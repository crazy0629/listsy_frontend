import React from "react";
import { AppLayout } from "@/layouts";
import { BeautySection } from "@/modules/main/Beauty";

const BeautySpecialty: React.FC = () => {
  return (
    <AppLayout name="beauty_specialty">
      <BeautySection page="/for-sale/beauty/specialty-treatments" />
    </AppLayout>
  );
};

export default BeautySpecialty;
