import React from "react";
import { AppLayout } from "@/layouts";
import { GardenSection } from "@/modules/main/Garden";

const GardenSoil: React.FC = () => {
  return (
    <AppLayout name="garden_soil">
      <GardenSection page="/garden-outdoor-equipment/soil-fertilizers-for-sale" />
    </AppLayout>
  );
};

export default GardenSoil;
