import React from "react";
import { AppLayout } from "@/layouts";
import { FoodSection } from "@/modules/main/Food";

const FoodChinese: React.FC = () => {
  return (
    <AppLayout name="food_chinese">
      <FoodSection page="/culinary-products/chinese-cuisine" />
    </AppLayout>
  );
};

export default FoodChinese;
