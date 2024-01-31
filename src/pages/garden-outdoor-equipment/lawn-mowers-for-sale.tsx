import React from "react";
import { AppLayout } from "@/layouts";
import { GardenSection } from "@/modules/main/Garden";

const Gardenlawn: React.FC = () => {
  return (
    <AppLayout name="garden_lawn">
      <GardenSection page="/garden-outdoor-equipment/lawn-mowers-for-sale" />
    </AppLayout>
  );
};

export default Gardenlawn;
