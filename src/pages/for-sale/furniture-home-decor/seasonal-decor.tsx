import React from "react";
import { AppLayout } from "@/layouts";
import { FurnitureSection } from "@/modules/main/Furniture";

const FurnitureSeasonal: React.FC = () => {
  return (
    <AppLayout name="furniture_seasonal">
      <FurnitureSection page="/for-sale/furniture-home-decor/seasonal-decor" />
    </AppLayout>
  );
};

export default FurnitureSeasonal;
