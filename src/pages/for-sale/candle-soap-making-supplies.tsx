import React from "react";
import { AppLayout } from "@/layouts";
import { DiyCraftSection } from "@/modules/main/DiyCraft";

const DiyCandle: React.FC = () => {
  return (
    <AppLayout name="diy_candle">
      <DiyCraftSection page="/for-sale/candle-soap-making-supplies" />
    </AppLayout>
  );
};

export default DiyCandle;
