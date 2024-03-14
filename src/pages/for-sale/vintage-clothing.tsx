import React from "react";
import { AppLayout } from "@/layouts";
import { FashionSection } from "@/modules/main/Fashion";

const DiyCandle: React.FC = () => {
  return (
    <AppLayout name="fashion_vintage_clothing">
      <FashionSection page="/for-sale/vintage-clothing" />
    </AppLayout>
  );
};

export default DiyCandle;
