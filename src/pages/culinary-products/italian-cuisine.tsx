import React from "react";
import { AppLayout } from "@/layouts";
import { FoodSection } from "@/modules/main/Food";

const FoodItalian: React.FC = () => {
  return (
    <AppLayout name="food_italian">
      <FoodSection page="/culinary-products/italian-cuisine" />
    </AppLayout>
  );
};

export default FoodItalian;
