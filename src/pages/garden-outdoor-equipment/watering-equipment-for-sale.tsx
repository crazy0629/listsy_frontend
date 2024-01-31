import React from "react";
import { AppLayout } from "@/layouts";
import { GardenSection } from "@/modules/main/Garden";

const GardenWatering: React.FC = () => {
  return (
    <AppLayout name="garden_watering">
      <GardenSection page="/garden-outdoor-equipment/watering-equipment-for-sale" />
    </AppLayout>
  );
};

export default GardenWatering;
