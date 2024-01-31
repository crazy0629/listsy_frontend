import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalBassDrum: React.FC = () => {
  return (
    <AppLayout name="musical_percussion_bass_drum">
      <MusicalSection
        page="/percussion-instruments-for-sale/bass-drum"
        sub="Percussion Instruments"
      />
    </AppLayout>
  );
};

export default MusicalBassDrum;
