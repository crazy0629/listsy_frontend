import React from "react";
import { AppLayout } from "@/layouts";
import { RealEstateSection } from "@/modules/main/RealEstate";

const RealEstateForSale: React.FC = () => {
  return (
    <AppLayout name="real_estate_all">
      <RealEstateSection page="/real-estate/all" />
    </AppLayout>
  );
};

export default RealEstateForSale;
