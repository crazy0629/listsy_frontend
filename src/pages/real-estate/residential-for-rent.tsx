import React from "react";
import { AppLayout } from "@/layouts";
import { RealEstateSection } from "@/modules/main/RealEstate";

const RealEstateForSale: React.FC = () => {
  return (
    <AppLayout name="real_estate_residential_for_rent">
      <RealEstateSection page="/real-estate/residential-for-rent" />
    </AppLayout>
  );
};

export default RealEstateForSale;
