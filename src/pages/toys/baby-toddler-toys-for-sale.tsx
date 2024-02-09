import React from "react";
import { AppLayout } from "@/layouts";
import { ToysSection } from "@/modules/main/Toys";

const ToyBabyToddler: React.FC = () => {
  return (
    <AppLayout name="toys_baby_toddler_toys_for_sale">
      <ToysSection page="/toys/baby-toddler-toys-for-sale" />
    </AppLayout>
  );
};

export default ToyBabyToddler;
