import React from "react";
import { AppLayout } from "@/layouts";
import { FurnitureSection } from "@/modules/main/Furniture";

const FurnitureChildren: React.FC = () => {
  return (
    <AppLayout name="furniture_clocks">
      <FurnitureSection page="/for-sale/furniture-home-decor/clocks" />
    </AppLayout>
  );
};

export default FurnitureChildren;
