import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalHarp: React.FC = () => {
  return (
    <AppLayout name="musical_string_harp">
      <MusicalSection
        page="/string-instruments-for-sale/harp"
        sub="String Instruments"
      />
    </AppLayout>
  );
};

export default MusicalHarp;
