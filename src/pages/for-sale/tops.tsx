import React from "react";
import { AppLayout } from "@/layouts";
import { FashionSection } from "@/modules/main/Fashion";

const DiyCandle: React.FC = () => {
  return (
    <AppLayout name="fashion_tops">
      <FashionSection page="/for-sale/tops" />
    </AppLayout>
  );
};

export default DiyCandle;
