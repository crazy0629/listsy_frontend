import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalKeyboard: React.FC = () => {
  return (
    <AppLayout name="musical_keyboard">
      <MusicalSection
        page="/keyboard-instruments-for-sale/keyboard"
        sub="Keyboard Instruments"
      />
    </AppLayout>
  );
};

export default MusicalKeyboard;
