import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalTrumpet: React.FC = () => {
  return (
    <AppLayout name="musical_brass_trumpet">
      <MusicalSection
        page="/brass-instruments-for-sale/trumpet"
        sub="Brass Instruments"
      />
    </AppLayout>
  );
};

export default MusicalTrumpet;
