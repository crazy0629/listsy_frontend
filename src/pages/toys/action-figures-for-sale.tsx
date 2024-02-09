import React from "react";
import { AppLayout } from "@/layouts";
import { ToysSection } from "@/modules/main/Toys";

const ToyActionFigures: React.FC = () => {
  return (
    <AppLayout name="toys_action_figures_for_sale">
      <ToysSection page="/toys/action-figures-for-sale" />
    </AppLayout>
  );
};

export default ToyActionFigures;
