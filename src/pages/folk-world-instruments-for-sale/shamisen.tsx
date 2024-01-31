import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalShamisen: React.FC = () => {
  return (
    <AppLayout name="musical_fork_shamisen">
      <MusicalSection
        page="/folk-world-instruments-for-sale/shamisen"
        sub="Folk and World Instruments"
      />
    </AppLayout>
  );
};

export default MusicalShamisen;
