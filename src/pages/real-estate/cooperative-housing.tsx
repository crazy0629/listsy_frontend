import React from "react";
import { AppLayout } from "@/layouts";
import { RealEstateSection } from "@/modules/main/RealEstate";

const RealEstateForSale: React.FC = () => {
  return (
    <AppLayout name="real_estate_cooperative_housing">
      <RealEstateSection page="/real-estate/cooperative-housing" />
    </AppLayout>
  );
};

export default RealEstateForSale;
