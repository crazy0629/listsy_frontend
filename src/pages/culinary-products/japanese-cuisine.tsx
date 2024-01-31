import React from "react";
import { AppLayout } from "@/layouts";
import { FoodSection } from "@/modules/main/Food";

const FoodJapanese: React.FC = () => {
  return (
    <AppLayout name="food_japanese">
      <FoodSection page="/culinary-products/japanese-cuisine" />
    </AppLayout>
  );
};

export default FoodJapanese;
