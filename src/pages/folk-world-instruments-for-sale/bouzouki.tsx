import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalBouzouki: React.FC = () => {
  return (
    <AppLayout name="musical_fork_bouzouki">
      <MusicalSection
        page="/folk-world-instruments-for-sale/bouzouki"
        sub="Folk and World Instruments"
      />
    </AppLayout>
  );
};

export default MusicalBouzouki;
