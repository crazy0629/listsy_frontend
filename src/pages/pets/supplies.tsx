import React from "react";
import { AppLayout } from "@/layouts";
import { PetSection } from "@/modules/main/Pet";

const PetsSupplies: React.FC = () => {
  return (
    <AppLayout name="pets_supplies">
      <PetSection page="/pets/supplies" />
    </AppLayout>
  );
};

export default PetsSupplies;
