import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalErhu: React.FC = () => {
  return (
    <AppLayout name="musical_fork_erhu">
      <MusicalSection
        page="/folk-world-instruments-for-sale/erhu"
        sub="Folk and World Instruments"
      />
    </AppLayout>
  );
};

export default MusicalErhu;
