import React from "react";
import { AppLayout } from "@/layouts";
import { FashionSection } from "@/modules/main/Fashion";

const DiyCandle: React.FC = () => {
  return (
    <AppLayout name="fashion_all">
      <FashionSection page="/for-sale/all-fashion" />
    </AppLayout>
  );
};

export default DiyCandle;
