import React from "react";
import { AppLayout } from "@/layouts";
import { FurnitureSection } from "@/modules/main/Furniture";

const FurnitureDecorative: React.FC = () => {
  return (
    <AppLayout name="furniture_decorative_accents">
      <FurnitureSection page="/for-sale/furniture-home-decor/decorative-accents" />
    </AppLayout>
  );
};

export default FurnitureDecorative;
