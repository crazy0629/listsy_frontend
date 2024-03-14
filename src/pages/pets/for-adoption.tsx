import React from "react";
import { AppLayout } from "@/layouts";
import { PetSection } from "@/modules/main/Pet";

const PetsForAdoption: React.FC = () => {
  return (
    <AppLayout name="pets_for_adoption">
      <PetSection page="/pets/for-adoption" />
    </AppLayout>
  );
};

export default PetsForAdoption;
