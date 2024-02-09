import React from "react";
import { AppLayout } from "@/layouts";
import { ToysSection } from "@/modules/main/Toys";

const ToyVehicles: React.FC = () => {
  return (
    <AppLayout name="toys_vehicles_playsets_for_sale">
      <ToysSection page="/toys/vehicles-playsets-for-sale" />
    </AppLayout>
  );
};

export default ToyVehicles;
