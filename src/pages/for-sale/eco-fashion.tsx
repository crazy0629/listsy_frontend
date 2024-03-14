import React from "react";
import { AppLayout } from "@/layouts";
import { FashionSection } from "@/modules/main/Fashion";

const DiyCandle: React.FC = () => {
  return (
    <AppLayout name="fashion_eco_fashion">
      <FashionSection page="/for-sale/eco-fashion" />
    </AppLayout>
  );
};

export default DiyCandle;
