import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalSynthesizer: React.FC = () => {
  return (
    <AppLayout name="musical_electronic_synthesizer">
      <MusicalSection
        page="/electronic-instruments-for-sale/synthesizer"
        sub="Electronic Instruments"
      />
    </AppLayout>
  );
};

export default MusicalSynthesizer;
