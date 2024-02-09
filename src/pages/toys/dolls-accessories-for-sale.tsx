import React from "react";
import { AppLayout } from "@/layouts";
import { ToysSection } from "@/modules/main/Toys";

const ToyDolls: React.FC = () => {
  return (
    <AppLayout name="toys_dolls_accessories_for_sale">
      <ToysSection page="/toys/dolls-accessories-for-sale" />
    </AppLayout>
  );
};

export default ToyDolls;
