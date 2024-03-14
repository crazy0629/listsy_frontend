import React from "react";
import { AppLayout } from "@/layouts";
import { FashionSection } from "@/modules/main/Fashion";

const DiyCandle: React.FC = () => {
  return (
    <AppLayout name="fashion_dresses">
      <FashionSection page="/for-sale/dresses" />
    </AppLayout>
  );
};

export default DiyCandle;
