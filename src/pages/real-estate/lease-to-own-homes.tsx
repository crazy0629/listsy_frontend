import React from "react";
import { AppLayout } from "@/layouts";
import { RealEstateSection } from "@/modules/main/RealEstate";

const RealEstateForSale: React.FC = () => {
  return (
    <AppLayout name="real_estate_lease_to_own_homes">
      <RealEstateSection page="/real-estate/lease-to-own-homes" />
    </AppLayout>
  );
};

export default RealEstateForSale;
