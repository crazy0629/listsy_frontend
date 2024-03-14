import React from "react";
import { AppLayout } from "@/layouts";
import { FashionSection } from "@/modules/main/Fashion";

const DiyCandle: React.FC = () => {
  return (
    <AppLayout name="fashion_footwear">
      <FashionSection page="/for-sale/footwear" />
    </AppLayout>
  );
};

export default DiyCandle;
