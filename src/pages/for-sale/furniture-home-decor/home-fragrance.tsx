import React from "react";
import { AppLayout } from "@/layouts";
import { FurnitureSection } from "@/modules/main/Furniture";

const FurnitureHomeFragrance: React.FC = () => {
  return (
    <AppLayout name="furniture_home_fragrance">
      <FurnitureSection page="/for-sale/furniture-home-decor/home-fragrance" />
    </AppLayout>
  );
};

export default FurnitureHomeFragrance;
