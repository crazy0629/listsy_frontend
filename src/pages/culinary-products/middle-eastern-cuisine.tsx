import React from "react";
import { AppLayout } from "@/layouts";
import { FoodSection } from "@/modules/main/Food";

const FoodMiddleEastern: React.FC = () => {
  return (
    <AppLayout name="food_middle_eastern">
      <FoodSection page="/culinary-products/middle-eastern-cuisine" />
    </AppLayout>
  );
};

export default FoodMiddleEastern;
