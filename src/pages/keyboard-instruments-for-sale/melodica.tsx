import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalMelodica: React.FC = () => {
  return (
    <AppLayout name="musical_keyboard_melodica">
      <MusicalSection
        page="/keyboard-instruments-for-sale/melodica"
        sub="Keyboard Instruments"
      />
    </AppLayout>
  );
};

export default MusicalMelodica;
