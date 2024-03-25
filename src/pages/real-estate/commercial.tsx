import React from "react";
import { AppLayout } from "@/layouts";
import { RealEstateSection } from "@/modules/main/RealEstate";

const RealEstateForSale: React.FC = () => {
  return (
    <AppLayout name="real_estate_commercial">
      <RealEstateSection page="/real-estate/commercial" />
    </AppLayout>
  );
};

export default RealEstateForSale;
