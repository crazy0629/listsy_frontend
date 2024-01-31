import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalRecorder: React.FC = () => {
  return (
    <AppLayout name="musical_woodwind_recorder">
      <MusicalSection
        page="/woodwind-instruments-for-sale/recorder"
        sub="Woodwind Instruments"
      />
    </AppLayout>
  );
};

export default MusicalRecorder;
