import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalSynthesizer: React.FC = () => {
  return (
    <AppLayout name="musical_keyboard_synthesizer">
      <MusicalSection
        page="/keyboard-instruments-for-sale/synthesizer"
        sub="Keyboard Instruments"
      />
    </AppLayout>
  );
};

export default MusicalSynthesizer;
