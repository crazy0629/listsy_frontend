import React from "react";
import { AppLayout } from "@/layouts";
import { FoodSection } from "@/modules/main/Food";

const FoodBritish: React.FC = () => {
  return (
    <AppLayout name="food_british">
      <FoodSection page="/culinary-products/british-irish-cuisine" />
    </AppLayout>
  );
};

export default FoodBritish;
