import React from "react";
import { AppLayout } from "@/layouts";
import { FashionSection } from "@/modules/main/Fashion";

const DiyCandle: React.FC = () => {
  return (
    <AppLayout name="fashion_swimwear">
      <FashionSection page="/for-sale/swimwear" />
    </AppLayout>
  );
};

export default DiyCandle;
