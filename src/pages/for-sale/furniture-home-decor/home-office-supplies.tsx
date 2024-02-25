import React from "react";
import { AppLayout } from "@/layouts";
import { FurnitureSection } from "@/modules/main/Furniture";

const FurnitureHomeoffice: React.FC = () => {
  return (
    <AppLayout name="furniture_home_office_supplies">
      <FurnitureSection page="/for-sale/furniture-home-decor/home-office-supplies" />
    </AppLayout>
  );
};

export default FurnitureHomeoffice;
