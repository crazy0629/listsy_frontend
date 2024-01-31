import React from "react";
import { AppLayout } from "@/layouts";
import { FoodSection } from "@/modules/main/Food";

const FoodWorld: React.FC = () => {
  return (
    <AppLayout name="food_world">
      <FoodSection page="/culinary-products/world-cuisines" />
    </AppLayout>
  );
};

export default FoodWorld;
