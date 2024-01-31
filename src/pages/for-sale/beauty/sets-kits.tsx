import React from "react";
import { AppLayout } from "@/layouts";
import { BeautySection } from "@/modules/main/Beauty";

const BeautySets: React.FC = () => {
  return (
    <AppLayout name="beauty_sets">
      <BeautySection page="/for-sale/beauty/sets-kits" />
    </AppLayout>
  );
};

export default BeautySets;
