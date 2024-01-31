import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalBongo: React.FC = () => {
  return (
    <AppLayout name="musical_percussion_bongo">
      <MusicalSection
        page="/percussion-instruments-for-sale/bongo"
        sub="Percussion Instruments"
      />
    </AppLayout>
  );
};

export default MusicalBongo;
