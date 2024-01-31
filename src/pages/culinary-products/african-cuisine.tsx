import React from "react";
import { AppLayout } from "@/layouts";
import { FoodSection } from "@/modules/main/Food";

const FoodAfrican: React.FC = () => {
  return (
    <AppLayout name="food_african">
      <FoodSection page="/culinary-products/african-cuisine" />
    </AppLayout>
  );
};

export default FoodAfrican;
