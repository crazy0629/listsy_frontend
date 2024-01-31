import React from "react";
import { AppLayout } from "@/layouts";
import { FoodSection } from "@/modules/main/Food";

const FoodVegan: React.FC = () => {
  return (
    <AppLayout name="food_vegan">
      <FoodSection page="/culinary-products/vegan-vegetarian-cuisine" />
    </AppLayout>
  );
};

export default FoodVegan;
