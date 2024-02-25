import React from "react";
import { AppLayout } from "@/layouts";
import { FurnitureSection } from "@/modules/main/Furniture";

const FurnitureStorage: React.FC = () => {
  return (
    <AppLayout name="furniture_storage">
      <FurnitureSection page="/for-sale/furniture-home-decor/storage-furniture" />
    </AppLayout>
  );
};

export default FurnitureStorage;
