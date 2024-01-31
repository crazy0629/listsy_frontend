import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalDrumKit: React.FC = () => {
  return (
    <AppLayout name="musical_percussion_drum_kit">
      <MusicalSection
        page="/percussion-instruments-for-sale/drum-kit"
        sub="Percussion Instruments"
      />
    </AppLayout>
  );
};

export default MusicalDrumKit;
