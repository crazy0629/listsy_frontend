import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalAccordion: React.FC = () => {
  return (
    <AppLayout name="musical_keyboard_accordion">
      <MusicalSection
        page="/keyboard-instruments-for-sale/accordion"
        sub="Keyboard Instruments"
      />
    </AppLayout>
  );
};

export default MusicalAccordion;
