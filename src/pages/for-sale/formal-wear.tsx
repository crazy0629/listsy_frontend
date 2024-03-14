import React from "react";
import { AppLayout } from "@/layouts";
import { FashionSection } from "@/modules/main/Fashion";

const DiyCandle: React.FC = () => {
  return (
    <AppLayout name="fashion_formal_wear">
      <FashionSection page="/for-sale/formal-wear" />
    </AppLayout>
  );
};

export default DiyCandle;
