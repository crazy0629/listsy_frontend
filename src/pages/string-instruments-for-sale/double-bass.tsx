import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalDouble: React.FC = () => {
  return (
    <AppLayout name="musical_string_double_bass">
      <MusicalSection
        page="/string-instruments-for-sale/double-bass"
        sub="String Instruments"
      />
    </AppLayout>
  );
};

export default MusicalDouble;
