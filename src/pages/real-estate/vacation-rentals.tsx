import React from "react";
import { AppLayout } from "@/layouts";
import { RealEstateSection } from "@/modules/main/RealEstate";

const RealEstateForSale: React.FC = () => {
  return (
    <AppLayout name="real_estate_vacation_rentals">
      <RealEstateSection page="/real-estate/vacation-rentals" />
    </AppLayout>
  );
};

export default RealEstateForSale;
