import React from "react";
import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";

const MusicalElectronic: React.FC = () => {
  return (
    <AppLayout name="musical_electronic_instruments">
      <MusicalSection page="/for-sale/musical-instruments/electronic-instruments" />
    </AppLayout>
  );
};

export default MusicalElectronic;
