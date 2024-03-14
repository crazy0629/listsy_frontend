import React from "react";
import { AppLayout } from "@/layouts";
import { FashionSection } from "@/modules/main/Fashion";

const DiyCandle: React.FC = () => {
  return (
    <AppLayout name="fashion_childrens_wear">
      <FashionSection page="/for-sale/childrens-wear" />
    </AppLayout>
  );
};

export default DiyCandle;
