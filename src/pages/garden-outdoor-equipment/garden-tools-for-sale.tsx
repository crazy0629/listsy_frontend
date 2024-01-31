import React from "react";
import { AppLayout } from "@/layouts";
import { GardenSection } from "@/modules/main/Garden";

const GardenTools: React.FC = () => {
  return (
    <AppLayout name="garden_tools">
      <GardenSection page="/garden-outdoor-equipment/garden-tools-for-sale" />
    </AppLayout>
  );
};

export default GardenTools;
