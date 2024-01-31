import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalTurntables: React.FC = () => {
  return (
    <AppLayout name="musical_other_turntables_dj_equipments">
      <MusicalSection
        page="/other-instruments-for-sale/turntables-dj-equipment"
        sub="Other Instruments"
      />
    </AppLayout>
  );
};

export default MusicalTurntables;
