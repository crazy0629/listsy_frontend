import React from "react";
import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";

const MusicalWoodwind: React.FC = () => {
  return (
    <AppLayout name="musical_woodwind_instruments">
      <MusicalSection page="/for-sale/musical-instruments/woodwind-instruments" />
    </AppLayout>
  );
};

export default MusicalWoodwind;
