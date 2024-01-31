import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalViola: React.FC = () => {
  return (
    <AppLayout name="musical_string_viola">
      <MusicalSection
        page="/string-instruments-for-sale/viola"
        sub="String Instruments"
      />
    </AppLayout>
  );
};

export default MusicalViola;
