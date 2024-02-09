import React from "react";
import { AppLayout } from "@/layouts";
import { ToysSection } from "@/modules/main/Toys";

const ToyScience: React.FC = () => {
  return (
    <AppLayout name="toys_science_nature_toys_for_sale">
      <ToysSection page="/toys/science-nature-toys-for-sale" />
    </AppLayout>
  );
};

export default ToyScience;
