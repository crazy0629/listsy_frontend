import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalMidiController: React.FC = () => {
  return (
    <AppLayout name="musical_electronic_midi_controller">
      <MusicalSection
        page="/electronic-instruments-for-sale/midi-controller"
        sub="Electronic Instruments"
      />
    </AppLayout>
  );
};

export default MusicalMidiController;
