import React from "react";
import { AppLayout } from "@/layouts";
import { BeautySection } from "@/modules/main/Beauty";

const BeautyCosmeceuticals: React.FC = () => {
  return (
    <AppLayout name="beauty_cosmeceuticals">
      <BeautySection page="/for-sale/beauty/cosmeceuticals" />
    </AppLayout>
  );
};

export default BeautyCosmeceuticals;
