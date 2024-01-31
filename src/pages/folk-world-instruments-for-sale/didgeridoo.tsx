import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalDidgeridoo: React.FC = () => {
  return (
    <AppLayout name="musical_fork_didgeridoo">
      <MusicalSection
        page="/folk-world-instruments-for-sale/didgeridoo"
        sub="Folk and World Instruments"
      />
    </AppLayout>
  );
};

export default MusicalDidgeridoo;
