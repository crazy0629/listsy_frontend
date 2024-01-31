import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalSaxophone: React.FC = () => {
  return (
    <AppLayout name="musical_woodwind_saxophone">
      <MusicalSection
        page="/woodwind-instruments-for-sale/saxophone"
        sub="Woodwind Instruments"
      />
    </AppLayout>
  );
};

export default MusicalSaxophone;
