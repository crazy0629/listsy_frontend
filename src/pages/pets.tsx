import React from "react";
import { AppLayout } from "@/layouts";
import { PetSection } from "@/modules/main/Pet";

const PetsPage: React.FC = () => {
  return (
    <AppLayout name="pets">
      <PetSection />
    </AppLayout>
  );
};

export default PetsPage;
