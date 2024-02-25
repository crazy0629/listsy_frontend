import React from "react";
import { AppLayout } from "@/layouts";
import { FurnitureSection } from "@/modules/main/Furniture";

const FurnitureSpecialty: React.FC = () => {
  return (
    <AppLayout name="furniture_specialty">
      <FurnitureSection page="/for-sale/furniture-home-decor/specialty-furniture" />
    </AppLayout>
  );
};

export default FurnitureSpecialty;
