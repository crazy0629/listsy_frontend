import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalBalalaika: React.FC = () => {
  return (
    <AppLayout name="musical_fork_balalaika">
      <MusicalSection
        page="/folk-world-instruments-for-sale/balalaika"
        sub="Folk and World Instruments"
      />
    </AppLayout>
  );
};

export default MusicalBalalaika;
