import React from "react";
import { AppLayout } from "@/layouts";
import { FoodSection } from "@/modules/main/Food";

const FoodGluten: React.FC = () => {
  return (
    <AppLayout name="food_gluten">
      <FoodSection page="/culinary-products/gluten-free-cuisine" />
    </AppLayout>
  );
};

export default FoodGluten;
