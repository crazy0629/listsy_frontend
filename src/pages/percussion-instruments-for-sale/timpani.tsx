import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalTimpani: React.FC = () => {
  return (
    <AppLayout name="musical_percussion_timpani">
      <MusicalSection
        page="/percussion-instruments-for-sale/timpani"
        sub="Percussion Instruments"
      />
    </AppLayout>
  );
};

export default MusicalTimpani;
