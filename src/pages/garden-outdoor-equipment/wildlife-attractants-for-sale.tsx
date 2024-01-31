import React from "react";
import { AppLayout } from "@/layouts";
import { GardenSection } from "@/modules/main/Garden";

const GardenWildlife: React.FC = () => {
  return (
    <AppLayout name="garden_wildlife">
      <GardenSection page="/garden-outdoor-equipment/wildlife-attractants-for-sale" />
    </AppLayout>
  );
};

export default GardenWildlife;
