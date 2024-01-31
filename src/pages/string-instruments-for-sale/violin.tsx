import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalViolin: React.FC = () => {
  return (
    <AppLayout name="musical_string_violin">
      <MusicalSection
        page="/string-instruments-for-sale/violin"
        sub="String Instruments"
      />
    </AppLayout>
  );
};

export default MusicalViolin;
