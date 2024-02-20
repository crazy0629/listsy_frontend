import React from "react";
import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";

const MusicalBrass: React.FC = () => {
  return (
    <AppLayout name="musical_brass_instruments">
      <MusicalSection page="/for-sale/musical-instruments/brass-instruments" />
    </AppLayout>
  );
};

export default MusicalBrass;
