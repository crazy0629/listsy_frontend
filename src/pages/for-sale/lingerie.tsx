import React from "react";
import { AppLayout } from "@/layouts";
import { FashionSection } from "@/modules/main/Fashion";

const DiyCandle: React.FC = () => {
  return (
    <AppLayout name="fashion_lingerie">
      <FashionSection page="/for-sale/lingerie" />
    </AppLayout>
  );
};

export default DiyCandle;
