import React from "react";
import { AppLayout } from "@/layouts";
import { GardenSection } from "@/modules/main/Garden";

const GardenOutdoor: React.FC = () => {
  return (
    <AppLayout name="garden_outdoor">
      <GardenSection page="/garden-outdoor-equipment/outdoor-furniture-for-sale" />
    </AppLayout>
  );
};

export default GardenOutdoor;
