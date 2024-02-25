import React from "react";
import { AppLayout } from "@/layouts";
import { FurnitureSection } from "@/modules/main/Furniture";

const FurnitureOutdoor: React.FC = () => {
  return (
    <AppLayout name="furniture_outdoor">
      <FurnitureSection page="/for-sale/furniture-home-decor/outdoor-furniture" />
    </AppLayout>
  );
};

export default FurnitureOutdoor;
