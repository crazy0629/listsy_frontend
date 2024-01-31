import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalElectricBass: React.FC = () => {
  return (
    <AppLayout name="musical_electronic_bass">
      <MusicalSection
        page="/electronic-instruments-for-sale/electric-bass"
        sub="Electronic Instruments"
      />
    </AppLayout>
  );
};

export default MusicalElectricBass;
