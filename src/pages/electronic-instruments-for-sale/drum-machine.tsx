import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalDrumMachine: React.FC = () => {
  return (
    <AppLayout name="musical_electronic_drum_machine">
      <MusicalSection
        page="/electronic-instruments-for-sale/drum-machine"
        sub="Electronic Instruments"
      />
    </AppLayout>
  );
};

export default MusicalDrumMachine;
