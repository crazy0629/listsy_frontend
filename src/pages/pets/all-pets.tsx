import React from "react";
import { AppLayout } from "@/layouts";
import { PetSection } from "@/modules/main/Pet";

const PetsAll: React.FC = () => {
  return (
    <AppLayout name="pets_all">
      <PetSection page="/pets/all-pets" />
    </AppLayout>
  );
};

export default PetsAll;
