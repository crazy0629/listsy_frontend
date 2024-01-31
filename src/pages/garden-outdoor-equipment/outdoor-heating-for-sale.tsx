import React from "react";
import { AppLayout } from "@/layouts";
import { GardenSection } from "@/modules/main/Garden";

const GardenHeating: React.FC = () => {
  return (
    <AppLayout name="garden_heating">
      <GardenSection page="/garden-outdoor-equipment/outdoor-heating-for-sale" />
    </AppLayout>
  );
};

export default GardenHeating;
