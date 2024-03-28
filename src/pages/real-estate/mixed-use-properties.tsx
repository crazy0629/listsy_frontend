import React from "react";
import { AppLayout } from "@/layouts";
import { RealEstateSection } from "@/modules/main/RealEstate";

const RealEstateForSale: React.FC = () => {
  return (
    <AppLayout name="real_estate_mixed_use_properties">
      <RealEstateSection page="/real-estate/mixed-use-properties" />
    </AppLayout>
  );
};

export default RealEstateForSale;
