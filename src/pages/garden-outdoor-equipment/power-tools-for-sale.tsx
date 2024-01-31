import React from "react";
import { AppLayout } from "@/layouts";
import { GardenSection } from "@/modules/main/Garden";

const GardenPower: React.FC = () => {
  return (
    <AppLayout name="garden_power">
      <GardenSection page="/garden-outdoor-equipment/power-tools-for-sale" />
    </AppLayout>
  );
};

export default GardenPower;
