import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalMaracas: React.FC = () => {
  return (
    <AppLayout name="musical_percussion_maracas">
      <MusicalSection
        page="/percussion-instruments-for-sale/maracas"
        sub="Percussion Instruments"
      />
    </AppLayout>
  );
};

export default MusicalMaracas;
