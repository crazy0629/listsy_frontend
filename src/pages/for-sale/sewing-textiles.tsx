import React from "react";
import { AppLayout } from "@/layouts";
import { DiyCraftSection } from "@/modules/main/DiyCraft";

const DiySewing: React.FC = () => {
  return (
    <AppLayout name="diy_sewing">
      <DiyCraftSection page="/for-sale/sewing-textiles" />
    </AppLayout>
  );
};

export default DiySewing;
