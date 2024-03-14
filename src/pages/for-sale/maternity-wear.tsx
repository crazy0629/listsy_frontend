import React from "react";
import { AppLayout } from "@/layouts";
import { FashionSection } from "@/modules/main/Fashion";

const DiyCandle: React.FC = () => {
  return (
    <AppLayout name="fashion_maternity_wear">
      <FashionSection page="/for-sale/maternity-wear" />
    </AppLayout>
  );
};

export default DiyCandle;
