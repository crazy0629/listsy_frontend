import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalTheremin: React.FC = () => {
  return (
    <AppLayout name="musical_electronic_theremin">
      <MusicalSection
        page="/electronic-instruments-for-sale/theremin"
        sub="Electronic Instruments"
      />
    </AppLayout>
  );
};

export default MusicalTheremin;
