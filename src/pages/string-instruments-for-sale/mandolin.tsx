import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalMandolin: React.FC = () => {
  return (
    <AppLayout name="musical_string_mandolin">
      <MusicalSection
        page="/string-instruments-for-sale/mandolin"
        sub="String Instruments"
      />
    </AppLayout>
  );
};

export default MusicalMandolin;
