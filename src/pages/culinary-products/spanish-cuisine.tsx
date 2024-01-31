import React from "react";
import { AppLayout } from "@/layouts";
import { FoodSection } from "@/modules/main/Food";

const FoodSpanish: React.FC = () => {
  return (
    <AppLayout name="food_spanish">
      <FoodSection page="/culinary-products/spanish-cuisine" />
    </AppLayout>
  );
};

export default FoodSpanish;
