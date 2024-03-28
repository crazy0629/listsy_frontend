import React from "react";
import { AppLayout } from "@/layouts";
import { RealEstateSection } from "@/modules/main/RealEstate";

const RealEstateForSale: React.FC = () => {
  return (
    <AppLayout name="real_estate_short_sale_properties">
      <RealEstateSection page="/real-estate/short-sale-properties" />
    </AppLayout>
  );
};

export default RealEstateForSale;
