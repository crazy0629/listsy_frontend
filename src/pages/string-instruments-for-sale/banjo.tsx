import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalBanjo: React.FC = () => {
  return (
    <AppLayout name="musical_string_banjo">
      <MusicalSection
        page="/string-instruments-for-sale/banjo"
        sub="String Instruments"
      />
    </AppLayout>
  );
};

export default MusicalBanjo;
