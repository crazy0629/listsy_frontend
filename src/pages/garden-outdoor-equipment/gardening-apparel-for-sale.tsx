import React from "react";
import { AppLayout } from "@/layouts";
import { GardenSection } from "@/modules/main/Garden";

const GardenApparel: React.FC = () => {
  return (
    <AppLayout name="garden_apparel">
      <GardenSection page="/garden-outdoor-equipment/gardening-apparel-for-sale" />
    </AppLayout>
  );
};

export default GardenApparel;
