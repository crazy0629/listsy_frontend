import React from "react";
import { AppLayout } from "@/layouts";
import { FoodSection } from "@/modules/main/Food";

const FoodAmerican: React.FC = () => {
  return (
    <AppLayout name="food_american">
      <FoodSection page="/culinary-products/american-cuisine" />
    </AppLayout>
  );
};

export default FoodAmerican;
