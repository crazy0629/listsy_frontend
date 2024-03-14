import React from "react";
import { AppLayout } from "@/layouts";
import { FashionSection } from "@/modules/main/Fashion";

const DiyCandle: React.FC = () => {
  return (
    <AppLayout name="fashion_bottoms">
      <FashionSection page="/for-sale/bottoms" />
    </AppLayout>
  );
};

export default DiyCandle;
