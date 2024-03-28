import React from "react";
import { AppLayout } from "@/layouts";
import { RealEstateSection } from "@/modules/main/RealEstate";

const RealEstateForSale: React.FC = () => {
  return (
    <AppLayout name="real_estate_sublets">
      <RealEstateSection page="/real-estate/sublets" />
    </AppLayout>
  );
};

export default RealEstateForSale;
