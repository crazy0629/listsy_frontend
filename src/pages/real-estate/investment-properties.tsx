import React from "react";
import { AppLayout } from "@/layouts";
import { RealEstateSection } from "@/modules/main/RealEstate";

const RealEstateForSale: React.FC = () => {
  return (
    <AppLayout name="real_estate_investment_properties">
      <RealEstateSection page="/real-estate/investment-properties" />
    </AppLayout>
  );
};

export default RealEstateForSale;
