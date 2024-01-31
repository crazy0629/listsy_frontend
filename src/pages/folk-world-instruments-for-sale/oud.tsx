import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalOud: React.FC = () => {
  return (
    <AppLayout name="musical_fork_oud">
      <MusicalSection
        page="/folk-world-instruments-for-sale/oud"
        sub="Folk and World Instruments"
      />
    </AppLayout>
  );
};

export default MusicalOud;
