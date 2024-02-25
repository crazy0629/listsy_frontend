import React from "react";
import { AppLayout } from "@/layouts";
import { FurnitureSection } from "@/modules/main/Furniture";

const FurnitureLighting: React.FC = () => {
  return (
    <AppLayout name="furniture_lighting">
      <FurnitureSection page="/for-sale/furniture-home-decor/lighting" />
    </AppLayout>
  );
};

export default FurnitureLighting;
