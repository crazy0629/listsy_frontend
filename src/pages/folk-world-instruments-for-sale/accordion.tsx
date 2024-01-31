import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalAccordion: React.FC = () => {
  return (
    <AppLayout name="musical_fork_accordion">
      <MusicalSection
        page="/folk-world-instruments-for-sale/accordion"
        sub="Folk and World Instruments"
      />
    </AppLayout>
  );
};

export default MusicalAccordion;
