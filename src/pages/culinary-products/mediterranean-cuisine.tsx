import React from "react";
import { AppLayout } from "@/layouts";
import { FoodSection } from "@/modules/main/Food";

const FoodMediterranean: React.FC = () => {
  return (
    <AppLayout name="food_mediterranean">
      <FoodSection page="/culinary-products/mediterranean-cuisine" />
    </AppLayout>
  );
};

export default FoodMediterranean;
