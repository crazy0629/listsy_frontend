import React from "react";
import { AppLayout } from "@/layouts";
import { FoodSection } from "@/modules/main/Food";

const FoodSouthAmerican: React.FC = () => {
  return (
    <AppLayout name="food_south_american">
      <FoodSection page="/culinary-products/south-american-cuisine" />
    </AppLayout>
  );
};

export default FoodSouthAmerican;
