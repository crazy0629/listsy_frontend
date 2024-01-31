import React from "react";
import { AppLayout } from "@/layouts";
import { DiyCraftSection } from "@/modules/main/DiyCraft";

const DiyUpcycling: React.FC = () => {
  return (
    <AppLayout name="diy_upcycling">
      <DiyCraftSection page="/for-sale/upcycling-recycling-crafts" />
    </AppLayout>
  );
};

export default DiyUpcycling;
