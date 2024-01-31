import React from "react";
import { AppLayout } from "@/layouts";
import { FoodSection } from "@/modules/main/Food";

const FoodKorean: React.FC = () => {
  return (
    <AppLayout name="food_korean">
      <FoodSection page="/culinary-products/korean-cuisine" />
    </AppLayout>
  );
};

export default FoodKorean;
