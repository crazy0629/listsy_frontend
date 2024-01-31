import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalHarpsichord: React.FC = () => {
  return (
    <AppLayout name="musical_keyboard_harpsichord">
      <MusicalSection
        page="/keyboard-instruments-for-sale/harpsichord"
        sub="Keyboard Instruments"
      />
    </AppLayout>
  );
};

export default MusicalHarpsichord;
