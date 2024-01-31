import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalMarimba: React.FC = () => {
  return (
    <AppLayout name="musical_percussion_marimba">
      <MusicalSection
        page="/percussion-instruments-for-sale/marimba"
        sub="Percussion Instruments"
      />
    </AppLayout>
  );
};

export default MusicalMarimba;
