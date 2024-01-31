import React from "react";
import { AppLayout } from "@/layouts";
import { FoodSection } from "@/modules/main/Food";

const FoodOther: React.FC = () => {
  return (
    <AppLayout name="food_other">
      <FoodSection page="/culinary-products/other-cuisine" />
    </AppLayout>
  );
};

export default FoodOther;
