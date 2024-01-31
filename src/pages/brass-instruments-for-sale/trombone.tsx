import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalTrombone: React.FC = () => {
  return (
    <AppLayout name="musical_brass_trombone">
      <MusicalSection
        page="/brass-instruments-for-sale/trombone"
        sub="Brass Instruments"
      />
    </AppLayout>
  );
};

export default MusicalTrombone;
