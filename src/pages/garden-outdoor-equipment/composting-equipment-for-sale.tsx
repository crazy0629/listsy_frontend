import React from "react";
import { AppLayout } from "@/layouts";
import { GardenSection } from "@/modules/main/Garden";

const GardenComposting: React.FC = () => {
  return (
    <AppLayout name="garden_composting">
      <GardenSection page="/garden-outdoor-equipment/lawn-mowers-for-sale" />
    </AppLayout>
  );
};

export default GardenComposting;
