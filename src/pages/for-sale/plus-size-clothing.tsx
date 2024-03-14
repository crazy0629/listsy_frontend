import React from "react";
import { AppLayout } from "@/layouts";
import { FashionSection } from "@/modules/main/Fashion";

const DiyCandle: React.FC = () => {
  return (
    <AppLayout name="fashion_plus_size_clothing">
      <FashionSection page="/for-sale/plus-size-clothing" />
    </AppLayout>
  );
};

export default DiyCandle;
