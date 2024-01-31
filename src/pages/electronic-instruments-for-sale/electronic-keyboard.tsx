import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalElectronicKeyboard: React.FC = () => {
  return (
    <AppLayout name="musical_electronic_keyboard">
      <MusicalSection
        page="/electronic-instruments-for-sale/electronic-keyboard"
        sub="Electronic Instruments"
      />
    </AppLayout>
  );
};

export default MusicalElectronicKeyboard;
