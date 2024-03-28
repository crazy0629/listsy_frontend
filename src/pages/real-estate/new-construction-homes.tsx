import React from "react";
import { AppLayout } from "@/layouts";
import { RealEstateSection } from "@/modules/main/RealEstate";

const RealEstateForSale: React.FC = () => {
  return (
    <AppLayout name="real_estate_new_construction_homes">
      <RealEstateSection page="/real-estate/new-construction-homes" />
    </AppLayout>
  );
};

export default RealEstateForSale;
