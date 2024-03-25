import React from "react";
import { AppLayout } from "@/layouts";
import { RealEstateSection } from "@/modules/main/RealEstate";

const RealEstateForSale: React.FC = () => {
  return (
    <AppLayout name="real_estate_auction">
      <RealEstateSection page="/real-estate/auction" />
    </AppLayout>
  );
};

export default RealEstateForSale;
