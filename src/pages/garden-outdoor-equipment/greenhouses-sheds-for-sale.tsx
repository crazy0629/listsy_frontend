import React from "react";
import { AppLayout } from "@/layouts";
import { GardenSection } from "@/modules/main/Garden";

const GardenGreenhouses: React.FC = () => {
  return (
    <AppLayout name="garden_greenhouses">
      <GardenSection page="/garden-outdoor-equipment/greenhouses-sheds-for-sale" />
    </AppLayout>
  );
};

export default GardenGreenhouses;
