import React from "react";
import { AppLayout } from "@/layouts";
import { RealEstateSection } from "@/modules/main/RealEstate";

const RealEstateForSale: React.FC = () => {
  return (
    <AppLayout name="real_estate_rent_to_own_options">
      <RealEstateSection page="/real-estate/rent-to-own-options" />
    </AppLayout>
  );
};

export default RealEstateForSale;
