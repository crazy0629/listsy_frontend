import React from "react";
import { AppLayout } from "@/layouts";
import { FashionSection } from "@/modules/main/Fashion";

const DiyCandle: React.FC = () => {
  return (
    <AppLayout name="fashion_uniforms">
      <FashionSection page="/for-sale/uniforms" />
    </AppLayout>
  );
};

export default DiyCandle;
