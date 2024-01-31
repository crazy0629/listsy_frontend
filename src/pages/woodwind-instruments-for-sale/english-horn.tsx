import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalHorn: React.FC = () => {
  return (
    <AppLayout name="musical_woodwind_english_horn">
      <MusicalSection
        page="/woodwind-instruments-for-sale/english-horn"
        sub="Woodwind Instruments"
      />
    </AppLayout>
  );
};

export default MusicalHorn;
