import React from "react";
import { AppLayout } from "@/layouts";
import { FashionSection } from "@/modules/main/Fashion";

const DiyCandle: React.FC = () => {
  return (
    <AppLayout name="fashion_outerwear">
      <FashionSection page="/for-sale/outerwear" />
    </AppLayout>
  );
};

export default DiyCandle;
