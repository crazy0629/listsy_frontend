import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalTuba: React.FC = () => {
  return (
    <AppLayout name="musical_brass_tuba">
      <MusicalSection
        page="/brass-instruments-for-sale/tuba"
        sub="Brass Instruments"
      />
    </AppLayout>
  );
};

export default MusicalTuba;
