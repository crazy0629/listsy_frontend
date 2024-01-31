import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalSinging: React.FC = () => {
  return (
    <AppLayout name="musical_other_singing_lessions">
      <MusicalSection
        page="/other-instruments-for-sale/singing-lessons"
        sub="Other Instruments"
      />
    </AppLayout>
  );
};

export default MusicalSinging;
