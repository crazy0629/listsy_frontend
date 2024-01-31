import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalPiano: React.FC = () => {
  return (
    <AppLayout name="musical_keyboard_piano">
      <MusicalSection
        page="/keyboard-instruments-for-sale/piano"
        sub="Keyboard Instruments"
      />
    </AppLayout>
  );
};

export default MusicalPiano;
