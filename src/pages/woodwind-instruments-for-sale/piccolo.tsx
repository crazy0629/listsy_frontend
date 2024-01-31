import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalPiccolo: React.FC = () => {
  return (
    <AppLayout name="musical_woodwind_piccolo">
      <MusicalSection
        page="/woodwind-instruments-for-sale/piccolo"
        sub="Woodwind Instruments"
      />
    </AppLayout>
  );
};

export default MusicalPiccolo;
