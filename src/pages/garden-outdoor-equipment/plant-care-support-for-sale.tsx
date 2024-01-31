import React from "react";
import { AppLayout } from "@/layouts";
import { GardenSection } from "@/modules/main/Garden";

const GardenPlant: React.FC = () => {
  return (
    <AppLayout name="garden_plant">
      <GardenSection page="/garden-outdoor-equipment/plant-care-support-for-sale" />
    </AppLayout>
  );
};

export default GardenPlant;
