import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalEquipment: React.FC = () => {
  return (
    <AppLayout name="musical_other_music_equipment">
      <MusicalSection
        page="/other-instruments-for-sale/other-music-equipment"
        sub="Other Instruments"
      />
    </AppLayout>
  );
};

export default MusicalEquipment;
