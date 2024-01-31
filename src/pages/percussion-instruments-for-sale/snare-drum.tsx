import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalSnare: React.FC = () => {
  return (
    <AppLayout name="musical_percussion_snare_drum">
      <MusicalSection
        page="/percussion-instruments-for-sale/snare-drum"
        sub="Percussion Instruments"
      />
    </AppLayout>
  );
};

export default MusicalSnare;
