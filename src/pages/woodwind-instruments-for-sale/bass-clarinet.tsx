import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalBass: React.FC = () => {
  return (
    <AppLayout name="musical_woodwind_bass_clarinet">
      <MusicalSection
        page="/woodwind-instruments-for-sale/bass-clarinet"
        sub="Woodwind Instruments"
      />
    </AppLayout>
  );
};

export default MusicalBass;
