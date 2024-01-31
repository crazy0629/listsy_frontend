import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalGuitar: React.FC = () => {
  return (
    <AppLayout name="musical_string_guitar">
      <MusicalSection
        page="/string-instruments-for-sale/guitar"
        sub="String Instruments"
      />
    </AppLayout>
  );
};

export default MusicalGuitar;
