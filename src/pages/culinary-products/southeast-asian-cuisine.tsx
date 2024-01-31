import React from "react";
import { AppLayout } from "@/layouts";
import { FoodSection } from "@/modules/main/Food";

const FoodSoutheastAsian: React.FC = () => {
  return (
    <AppLayout name="food_southeast_asian">
      <FoodSection page="/culinary-products/southeast-asian-cuisine" />
    </AppLayout>
  );
};

export default FoodSoutheastAsian;
