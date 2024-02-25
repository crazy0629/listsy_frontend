import React from "react";
import { AppLayout } from "@/layouts";
import { FurnitureSection } from "@/modules/main/Furniture";

const FurnitureAll: React.FC = () => {
  return (
    <AppLayout name="furniture_all">
      <FurnitureSection page="/furniture-home-decor-for-sale/all-furniture" />
    </AppLayout>
  );
};

export default FurnitureAll;
