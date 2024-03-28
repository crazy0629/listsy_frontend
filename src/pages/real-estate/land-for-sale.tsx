import React from "react";
import { AppLayout } from "@/layouts";
import { RealEstateSection } from "@/modules/main/RealEstate";

const RealEstateForSale: React.FC = () => {
  return (
    <AppLayout name="real_estate_land_for_sale">
      <RealEstateSection page="/real-estate/land-for-sale" />
    </AppLayout>
  );
};

export default RealEstateForSale;
