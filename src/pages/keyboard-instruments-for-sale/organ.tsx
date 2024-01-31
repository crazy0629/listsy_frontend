import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalOrgan: React.FC = () => {
  return (
    <AppLayout name="musical_keyboard_organ">
      <MusicalSection
        page="/keyboard-instruments-for-sale/organ"
        sub="Keyboard Instruments"
      />
    </AppLayout>
  );
};

export default MusicalOrgan;
