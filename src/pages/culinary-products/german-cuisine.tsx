import React from "react";
import { AppLayout } from "@/layouts";
import { FoodSection } from "@/modules/main/Food";

const FoodGerman: React.FC = () => {
  return (
    <AppLayout name="food_german">
      <FoodSection page="/culinary-products/german-cuisine" />
    </AppLayout>
  );
};

export default FoodGerman;
