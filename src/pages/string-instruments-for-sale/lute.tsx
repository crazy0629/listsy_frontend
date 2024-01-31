import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalLute: React.FC = () => {
  return (
    <AppLayout name="musical_string_lute">
      <MusicalSection
        page="/string-instruments-for-sale/lute"
        sub="String Instruments"
      />
    </AppLayout>
  );
};

export default MusicalLute;
