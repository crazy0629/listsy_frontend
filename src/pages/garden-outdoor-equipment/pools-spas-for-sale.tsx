import React from "react";
import { AppLayout } from "@/layouts";
import { GardenSection } from "@/modules/main/Garden";

const GardenPools: React.FC = () => {
  return (
    <AppLayout name="garden_pools">
      <GardenSection page="/garden-outdoor-equipment/pools-spas-for-sale" />
    </AppLayout>
  );
};

export default GardenPools;
