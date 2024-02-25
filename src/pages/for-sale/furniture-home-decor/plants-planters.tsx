import React from "react";
import { AppLayout } from "@/layouts";
import { FurnitureSection } from "@/modules/main/Furniture";

const FurniturePlants: React.FC = () => {
  return (
    <AppLayout name="furniture_plants">
      <FurnitureSection page="/for-sale/furniture-home-decor/plants-planters" />
    </AppLayout>
  );
};

export default FurniturePlants;
