import React from "react";
import { AppLayout } from "@/layouts";
import { RealEstateSection } from "@/modules/main/RealEstate";

const RealEstateForSale: React.FC = () => {
  return (
    <AppLayout name="real_estate_sublet">
      <RealEstateSection page="/real-estate/sublet" />
    </AppLayout>
  );
};

export default RealEstateForSale;
