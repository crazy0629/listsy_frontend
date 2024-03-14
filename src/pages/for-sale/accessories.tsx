import React from "react";
import { AppLayout } from "@/layouts";
import { FashionSection } from "@/modules/main/Fashion";

const DiyCandle: React.FC = () => {
  return (
    <AppLayout name="fashion_accessories">
      <FashionSection page="/for-sale/accessories" />
    </AppLayout>
  );
};

export default DiyCandle;
