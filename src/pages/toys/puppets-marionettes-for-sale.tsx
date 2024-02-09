import React from "react";
import { AppLayout } from "@/layouts";
import { ToysSection } from "@/modules/main/Toys";

const ToyPuppets: React.FC = () => {
  return (
    <AppLayout name="toys_puppets_marionettes_for_sale">
      <DiyCraftSection page="/toys/puppets-marionettes-for-sale" />
    </AppLayout>
  );
};

export default ToyPuppets;
