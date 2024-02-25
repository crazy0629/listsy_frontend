import React from "react";
import { AppLayout } from "@/layouts";
import { FurnitureSection } from "@/modules/main/Furniture";

const FurnitureOffice: React.FC = () => {
  return (
    <AppLayout name="furniture_office">
      <FurnitureSection page="/for-sale/furniture-home-decor/office-furniture" />
    </AppLayout>
  );
};

export default FurnitureOffice;
