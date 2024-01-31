import React from "react";
import { AppLayout } from "@/layouts";
import { BeautySection } from "@/modules/main/Beauty";

const BeautyTravel: React.FC = () => {
  return (
    <AppLayout name="beauty_travel">
      <BeautySection page="/for-sale/beauty/travel-miniatures" />
    </AppLayout>
  );
};

export default BeautyTravel;
