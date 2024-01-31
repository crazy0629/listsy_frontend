import React from "react";
import { AppLayout } from "@/layouts";
import { GardenSection } from "@/modules/main/Garden";

const GardenSnow: React.FC = () => {
  return (
    <AppLayout name="garden_snow">
      <GardenSection page="/garden-outdoor-equipment/snow-removal-equipment-for-sale" />
    </AppLayout>
  );
};

export default GardenSnow;
