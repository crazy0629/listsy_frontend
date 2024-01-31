import React from "react";
import { AppLayout } from "@/layouts";
import { GardenSection } from "@/modules/main/Garden";

const GardenGrills: React.FC = () => {
  return (
    <AppLayout name="garden_grills">
      <GardenSection page="/garden-outdoor-equipment/grills-outdoor-cooking-for-sale" />
    </AppLayout>
  );
};

export default GardenGrills;
