import React from "react";
import { AppLayout } from "@/layouts";
import { FoodSection } from "@/modules/main/Food";

const FoodRussian: React.FC = () => {
  return (
    <AppLayout name="food_russian">
      <FoodSection page="/culinary-products/russian-eastern-european-cuisine" />
    </AppLayout>
  );
};

export default FoodRussian;
