import React from "react";
import { AppLayout } from "@/layouts";
import { FoodSection } from "@/modules/main/Food";

const FoodGreek: React.FC = () => {
  return (
    <AppLayout name="food_greek">
      <FoodSection page="/culinary-products/greek-cuisine" />
    </AppLayout>
  );
};

export default FoodGreek;
