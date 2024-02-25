import React from "react";
import { AppLayout } from "@/layouts";
import { FurnitureSection } from "@/modules/main/Furniture";

const FurnitureSeating: React.FC = () => {
  return (
    <AppLayout name="furniture_seating">
      <FurnitureSection page="/for-sale/furniture-home-decor/seating" />
    </AppLayout>
  );
};

export default FurnitureSeating;
