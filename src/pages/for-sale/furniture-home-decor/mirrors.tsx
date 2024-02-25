import React from "react";
import { AppLayout } from "@/layouts";
import { FurnitureSection } from "@/modules/main/Furniture";

const FurnitureMirrors: React.FC = () => {
  return (
    <AppLayout name="furniture_mirrors">
      <FurnitureSection page="/for-sale/furniture-home-decor/mirrors" />
    </AppLayout>
  );
};

export default FurnitureMirrors;
