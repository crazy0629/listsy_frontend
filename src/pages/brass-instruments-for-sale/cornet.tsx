import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalCornet: React.FC = () => {
  return (
    <AppLayout name="musical_brass_cornet">
      <MusicalSection
        page="/brass-instruments-for-sale/cornet"
        sub="Brass Instruments"
      />
    </AppLayout>
  );
};

export default MusicalCornet;
