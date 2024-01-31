import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalDjembe: React.FC = () => {
  return (
    <AppLayout name="musical_percussion_djembe">
      <MusicalSection
        page="/percussion-instruments-for-sale/djembe"
        sub="Percussion Instruments"
      />
    </AppLayout>
  );
};

export default MusicalDjembe;
