import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalUkulele: React.FC = () => {
  return (
    <AppLayout name="musical_string_ukulele">
      <MusicalSection
        page="/string-instruments-for-sale/ukulele"
        sub="String Instruments"
      />
    </AppLayout>
  );
};

export default MusicalUkulele;
