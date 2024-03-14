import React from "react";
import { AppLayout } from "@/layouts";
import { FashionSection } from "@/modules/main/Fashion";

const DiyCandle: React.FC = () => {
  return (
    <AppLayout name="fashion_bags">
      <FashionSection page="/for-sale/bags" />
    </AppLayout>
  );
};

export default DiyCandle;
