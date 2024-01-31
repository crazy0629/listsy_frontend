import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalTambourine: React.FC = () => {
  return (
    <AppLayout name="musical_percussion_tambourine">
      <MusicalSection
        page="/percussion-instruments-for-sale/tambourine"
        sub="Percussion Instruments"
      />
    </AppLayout>
  );
};

export default MusicalTambourine;
