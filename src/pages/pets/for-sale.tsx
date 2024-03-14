import React from "react";
import { AppLayout } from "@/layouts";
import { PetSection } from "@/modules/main/Pet";

const PetsForSale: React.FC = () => {
  return (
    <AppLayout name="pets_for_sale">
      <PetSection page="/pets/for-sale" />
    </AppLayout>
  );
};

export default PetsForSale;
