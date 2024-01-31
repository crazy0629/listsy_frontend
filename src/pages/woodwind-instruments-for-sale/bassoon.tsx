import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalBassoon: React.FC = () => {
  return (
    <AppLayout name="musical_woodwind_bassoon">
      <MusicalSection
        page="/woodwind-instruments-for-sale/bassoon"
        sub="Woodwind Instruments"
      />
    </AppLayout>
  );
};

export default MusicalBassoon;
