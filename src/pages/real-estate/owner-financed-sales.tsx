import React from "react";
import { AppLayout } from "@/layouts";
import { RealEstateSection } from "@/modules/main/RealEstate";

const RealEstateForSale: React.FC = () => {
  return (
    <AppLayout name="real_estate_owner_financed_sales">
      <RealEstateSection page="/real-estate/owner-financed-sales" />
    </AppLayout>
  );
};

export default RealEstateForSale;
