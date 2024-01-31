import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalOboe: React.FC = () => {
  return (
    <AppLayout name="musical_woodwind_oboe">
      <MusicalSection
        page="/woodwind-instruments-for-sale/oboe"
        sub="Woodwind Instruments"
      />
    </AppLayout>
  );
};

export default MusicalOboe;
