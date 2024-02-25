import React from "react";
import { AppLayout } from "@/layouts";
import { FurnitureSection } from "@/modules/main/Furniture";

const FurnitureWallDecor: React.FC = () => {
  return (
    <AppLayout name="furniture_wall_decor">
      <FurnitureSection page="/for-sale/furniture-home-decor/wall-decor" />
    </AppLayout>
  );
};

export default FurnitureWallDecor;
