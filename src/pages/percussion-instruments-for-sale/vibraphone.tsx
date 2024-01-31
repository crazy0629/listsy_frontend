import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalVibraphone: React.FC = () => {
  return (
    <AppLayout name="musical_percussion_vibraphone">
      <MusicalSection
        page="/percussion-instruments-for-sale/vibraphone"
        sub="Percussion Instruments"
      />
    </AppLayout>
  );
};

export default MusicalVibraphone;
