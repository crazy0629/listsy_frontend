import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalCello: React.FC = () => {
  return (
    <AppLayout name="musical_string_cello">
      <MusicalSection
        page="/string-instruments-for-sale/cello"
        sub="String Instruments"
      />
    </AppLayout>
  );
};

export default MusicalCello;
