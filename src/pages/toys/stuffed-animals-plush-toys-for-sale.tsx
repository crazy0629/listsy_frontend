import React from "react";
import { AppLayout } from "@/layouts";
import { ToysSection } from "@/modules/main/Toys";

const ToyStuffed: React.FC = () => {
  return (
    <AppLayout name="toys_stuffed_animals_plush_toys_for_sale">
      <ToysSection page="/toys/stuffed-animals-plush-toys-for-sale" />
    </AppLayout>
  );
};

export default ToyStuffed;
