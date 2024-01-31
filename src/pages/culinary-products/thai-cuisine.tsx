import React from "react";
import { AppLayout } from "@/layouts";
import { FoodSection } from "@/modules/main/Food";

const FoodThai: React.FC = () => {
  return (
    <AppLayout name="food_thai">
      <FoodSection page="/culinary-products/thai-cuisine" />
    </AppLayout>
  );
};

export default FoodThai;
