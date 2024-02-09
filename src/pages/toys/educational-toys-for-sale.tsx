import React from "react";
import { AppLayout } from "@/layouts";
import { ToysSection } from "@/modules/main/Toys";

const ToyEducational: React.FC = () => {
  return (
    <AppLayout name="toys_educational_toys_for_sale">
      <ToysSection page="/toys/educational-toys-for-sale" />
    </AppLayout>
  );
};

export default ToyEducational;
