import React from "react";
import { AppLayout } from "@/layouts";
import { GardenSection } from "@/modules/main/Garden";

const GardenAll: React.FC = () => {
  return (
    <AppLayout name="garden_all">
      <GardenSection page="/garden-outdoor-equipment/all-items-for-sale" />
    </AppLayout>
  );
};

export default GardenAll;
