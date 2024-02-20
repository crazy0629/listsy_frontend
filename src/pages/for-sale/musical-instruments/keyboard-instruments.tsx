import React from "react";
import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";

const MusicalKeyboard: React.FC = () => {
  return (
    <AppLayout name="musical_keyboard_instruments">
      <MusicalSection page="/for-sale/musical-instruments/keyboard-instruments" />
    </AppLayout>
  );
};

export default MusicalKeyboard;
