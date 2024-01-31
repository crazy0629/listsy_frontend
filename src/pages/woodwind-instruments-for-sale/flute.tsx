import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalFlute: React.FC = () => {
  return (
    <AppLayout name="musical_woodwind_flute">
      <MusicalSection
        page="/woodwind-instruments-for-sale/flute"
        sub="Woodwind Instruments"
      />
    </AppLayout>
  );
};

export default MusicalFlute;
