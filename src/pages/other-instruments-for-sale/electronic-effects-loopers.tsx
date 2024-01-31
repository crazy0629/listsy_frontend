import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalEffectsLoopers: React.FC = () => {
  return (
    <AppLayout name="musical_other_electronic_effects_loopers">
      <MusicalSection
        page="/other-instruments-for-sale/electronic-effects-loopers"
        sub="Other Instruments"
      />
    </AppLayout>
  );
};

export default MusicalEffectsLoopers;
