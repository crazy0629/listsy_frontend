import React from "react";
import { AppLayout } from "@/layouts";
import { FoodSection } from "@/modules/main/Food";

const FoodCaribbean: React.FC = () => {
  return (
    <AppLayout name="food_caribbean">
      <FoodSection page="/culinary-products/caribbean-cuisine" />
    </AppLayout>
  );
};

export default FoodCaribbean;
