import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalXylophone: React.FC = () => {
  return (
    <AppLayout name="musical_percussion_xylophone">
      <MusicalSection
        page="/percussion-instruments-for-sale/xylophone"
        sub="Percussion Instruments"
      />
    </AppLayout>
  );
};

export default MusicalXylophone;
