import React from "react";
import { AppLayout } from "@/layouts";
import { PetsPageSection } from "@/modules/main/Pet";

const PetsPage: React.FC = () => {
  return (
    <AppLayout name="pets">
      <PetsPageSection />
    </AppLayout>
  );
};

export default PetsPage;
