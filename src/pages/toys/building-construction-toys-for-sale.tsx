import React from "react";
import { AppLayout } from "@/layouts";
import { ToysSection } from "@/modules/main/Toys";

const ToyBuildingConstruction: React.FC = () => {
  return (
    <AppLayout name="toys_building_construction_toys_for_sale">
      <ToysSection page="/toys/building-construction-toys-for-sale" />
    </AppLayout>
  );
};

export default ToyBuildingConstruction;
