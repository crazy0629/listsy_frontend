import React from "react";
import { AppLayout } from "@/layouts";
import { RealEstateSection } from "@/modules/main/RealEstate";

const RealEstateForSale: React.FC = () => {
  return (
    <AppLayout name="real_estate_lease_to_own">
      <RealEstateSection page="/real-estate/lease-to-own" />
    </AppLayout>
  );
};

export default RealEstateForSale;
