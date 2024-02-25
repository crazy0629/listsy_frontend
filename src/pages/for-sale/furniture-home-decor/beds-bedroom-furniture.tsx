import React from "react";
import { AppLayout } from "@/layouts";
import { FurnitureSection } from "@/modules/main/Furniture";

const FurnitureBeds: React.FC = () => {
  return (
    <AppLayout name="furniture_beds_bedroom">
      <FurnitureSection page="/for-sale/furniture-home-decor/beds-bedroom-furniture" />
    </AppLayout>
  );
};

export default FurnitureBeds;
