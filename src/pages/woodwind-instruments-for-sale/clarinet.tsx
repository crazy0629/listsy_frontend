import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalClarinet: React.FC = () => {
  return (
    <AppLayout name="musical_woodwind_clarinet">
      <MusicalSection
        page="/woodwind-instruments-for-sale/clarinet"
        sub="Woodwind Instruments"
      />
    </AppLayout>
  );
};

export default MusicalClarinet;
