import React from "react";
import { AppLayout } from "@/layouts";
import { BeautySection } from "@/modules/main/Beauty";

const BeautyOral: React.FC = () => {
  return (
    <AppLayout name="beauty_oral">
      <BeautySection page="/for-sale/beauty/oral-care" />
    </AppLayout>
  );
};

export default BeautyOral;
