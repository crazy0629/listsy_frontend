import React from "react";
import { AppLayout } from "@/layouts";
import { FurnitureSection } from "@/modules/main/Furniture";

const FurnitureTables: React.FC = () => {
  return (
    <AppLayout name="furniture_tables">
      <FurnitureSection page="/for-sale/furniture-home-decor/tables" />
    </AppLayout>
  );
};

export default FurnitureTables;
