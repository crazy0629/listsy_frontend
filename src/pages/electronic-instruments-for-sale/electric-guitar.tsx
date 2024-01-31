import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalElectricGuitar: React.FC = () => {
  return (
    <AppLayout name="musical_electronic_guitar">
      <MusicalSection
        page="/electronic-instruments-for-sale/electric-guitar"
        sub="Electronic Instruments"
      />
    </AppLayout>
  );
};

export default MusicalElectricGuitar;
