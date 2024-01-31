import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalFlugelhorn: React.FC = () => {
  return (
    <AppLayout name="musical_brass_flugelhorn">
      <MusicalSection
        page="/brass-instruments-for-sale/flugelhorn"
        sub="Brass Instruments"
      />
    </AppLayout>
  );
};

export default MusicalFlugelhorn;
