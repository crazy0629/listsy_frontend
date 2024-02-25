import React from "react";
import { AppLayout } from "@/layouts";
import { FurnitureSection } from "@/modules/main/Furniture";

const FurnitureTextiles: React.FC = () => {
  return (
    <AppLayout name="furniture_textiles">
      <FurnitureSection page="/for-sale/furniture-home-decor/textiles" />
    </AppLayout>
  );
};

export default FurnitureTextiles;
