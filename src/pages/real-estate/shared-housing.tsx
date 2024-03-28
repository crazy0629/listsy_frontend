import React from "react";
import { AppLayout } from "@/layouts";
import { RealEstateSection } from "@/modules/main/RealEstate";

const RealEstateForSale: React.FC = () => {
  return (
    <AppLayout name="real_estate_shared_housing">
      <RealEstateSection page="/real-estate/shared-housing" />
    </AppLayout>
  );
};

export default RealEstateForSale;
