import React from "react";
import { AppLayout } from "@/layouts";
import { FoodSection } from "@/modules/main/Food";

const FoodScandinavian: React.FC = () => {
  return (
    <AppLayout name="food_scandinavian">
      <FoodSection page="/culinary-products/scandinavian-cuisine" />
    </AppLayout>
  );
};

export default FoodScandinavian;
