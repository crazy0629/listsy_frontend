import React from "react";
import { AppLayout } from "@/layouts";
import { GardenSection } from "@/modules/main/Garden";

const GardenSeeds: React.FC = () => {
  return (
    <AppLayout name="garden_seeds">
      <GardenSection page="/garden-outdoor-equipment/seeds-bulbs-for-sale" />
    </AppLayout>
  );
};

export default GardenSeeds;
