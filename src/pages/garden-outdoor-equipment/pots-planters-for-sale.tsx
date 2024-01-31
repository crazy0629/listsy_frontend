import React from "react";
import { AppLayout } from "@/layouts";
import { GardenSection } from "@/modules/main/Garden";

const GardenPots: React.FC = () => {
  return (
    <AppLayout name="garden_pots">
      <GardenSection page="/garden-outdoor-equipment/pots-planters-for-sale" />
    </AppLayout>
  );
};

export default GardenPots;
