import React from "react";
import { AppLayout } from "@/layouts";
import { GardenSection } from "@/modules/main/Garden";

const GardenPest: React.FC = () => {
  return (
    <AppLayout name="garden_pest">
      <GardenSection page="/garden-outdoor-equipment/pest-control-products-for-sale" />
    </AppLayout>
  );
};

export default GardenPest;
