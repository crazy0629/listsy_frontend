import React from "react";
import { AppLayout } from "@/layouts";
import { FoodSection } from "@/modules/main/Food";

const FoodFrench: React.FC = () => {
  return (
    <AppLayout name="food_french">
      <FoodSection page="/culinary-products/french-cuisine" />
    </AppLayout>
  );
};

export default FoodFrench;
