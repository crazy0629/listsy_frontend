import React from "react";
import { AppLayout } from "@/layouts";
import { FurnitureSection } from "@/modules/main/Furniture";

const FurnitureChildren: React.FC = () => {
  return (
    <AppLayout name="furniture_children">
      <FurnitureSection page="/for-sale/furniture-home-decor/children-furniture" />
    </AppLayout>
  );
};

export default FurnitureChildren;
