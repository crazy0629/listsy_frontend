import React from "react";
import { AppLayout } from "@/layouts";
import { FoodSection } from "@/modules/main/Food";

const FoodIndian: React.FC = () => {
  return (
    <AppLayout name="food_indian">
      <FoodSection page="/culinary-products/indian-cuisine" />
    </AppLayout>
  );
};

export default FoodIndian;
