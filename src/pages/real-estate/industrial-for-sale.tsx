import React from "react";
import { AppLayout } from "@/layouts";
import { RealEstateSection } from "@/modules/main/RealEstate";

const RealEstateForSale: React.FC = () => {
  return (
    <AppLayout name="real_estate_industrial_for_sale">
      <RealEstateSection page="/real-estate/industrial-for-sale" />
    </AppLayout>
  );
};

export default RealEstateForSale;
