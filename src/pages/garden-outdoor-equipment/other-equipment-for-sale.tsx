import React from "react";
import { AppLayout } from "@/layouts";
import { GardenSection } from "@/modules/main/Garden";

const GardenOther: React.FC = () => {
  return (
    <AppLayout name="garden_other">
      <GardenSection page="/garden-outdoor-equipment/other-equipment-for-sale" />
    </AppLayout>
  );
};

export default GardenOther;
