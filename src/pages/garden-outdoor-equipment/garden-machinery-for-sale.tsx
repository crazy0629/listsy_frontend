import React from "react";
import { AppLayout } from "@/layouts";
import { GardenSection } from "@/modules/main/Garden";

const GardenMachinery: React.FC = () => {
  return (
    <AppLayout name="garden_machinery">
      <GardenSection page="/garden-outdoor-equipment/garden-machinery-for-sale" />
    </AppLayout>
  );
};

export default GardenMachinery;
