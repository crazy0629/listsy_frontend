import React from "react";
import { AppLayout } from "@/layouts";
import { ToysSection } from "@/modules/main/Toys";

const ToyMusical: React.FC = () => {
  return (
    <AppLayout name="toys_musical_toys_for_sale">
      <ToysSection page="/toys/musical-toys-for-sale" />
    </AppLayout>
  );
};

export default ToyMusical;
