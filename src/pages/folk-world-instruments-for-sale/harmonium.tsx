import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalHarmonium: React.FC = () => {
  return (
    <AppLayout name="musical_fork_harmonium">
      <MusicalSection
        page="/folk-world-instruments-for-sale/harmonium"
        sub="Folk and World Instruments"
      />
    </AppLayout>
  );
};

export default MusicalHarmonium;
