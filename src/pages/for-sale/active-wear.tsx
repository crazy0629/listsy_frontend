import React from "react";
import { AppLayout } from "@/layouts";
import { FashionSection } from "@/modules/main/Fashion";

const DiyCandle: React.FC = () => {
  return (
    <AppLayout name="fashion_active_wear">
      <FashionSection page="/for-sale/active-wear" />
    </AppLayout>
  );
};

export default DiyCandle;
