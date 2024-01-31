import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalCajon: React.FC = () => {
  return (
    <AppLayout name="musical_percussion_cajon">
      <MusicalSection
        page="/percussion-instruments-for-sale/cajon"
        sub="Percussion Instruments"
      />
    </AppLayout>
  );
};

export default MusicalCajon;
