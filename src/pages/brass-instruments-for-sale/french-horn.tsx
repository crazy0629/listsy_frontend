import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalFrenchHorn: React.FC = () => {
  return (
    <AppLayout name="musical_brass_french_horn">
      <MusicalSection
        page="/brass-instruments-for-sale/french-horn"
        sub="Brass Instruments"
      />
    </AppLayout>
  );
};

export default MusicalFrenchHorn;
