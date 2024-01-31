import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalConga: React.FC = () => {
  return (
    <AppLayout name="musical_percussion_conga">
      <MusicalSection
        page="/percussion-instruments-for-sale/conga"
        sub="Percussion Instruments"
      />
    </AppLayout>
  );
};

export default MusicalConga;
