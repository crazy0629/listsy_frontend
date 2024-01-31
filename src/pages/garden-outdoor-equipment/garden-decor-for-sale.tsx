import React from "react";
import { AppLayout } from "@/layouts";
import { GardenSection } from "@/modules/main/Garden";

const GardenDecor: React.FC = () => {
  return (
    <AppLayout name="garden_decor">
      <GardenSection page="/garden-outdoor-equipment/garden-decor-for-sale" />
    </AppLayout>
  );
};

export default GardenDecor;
