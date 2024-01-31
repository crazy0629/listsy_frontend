import React from "react";
import { AppLayout } from "@/layouts";
import { FoodSection } from "@/modules/main/Food";

const FoodMexican: React.FC = () => {
  return (
    <AppLayout name="food_mexican">
      <FoodSection page="/culinary-products/mexican-cuisine" />
    </AppLayout>
  );
};

export default FoodMexican;
