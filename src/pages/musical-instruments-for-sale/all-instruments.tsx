import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalAll: React.FC = () => {
  return (
    <AppLayout name="musical_all">
      <MusicalSection
        page="/musical-instruments-for-sale/all-instruments"
        sub="All"
      />
    </AppLayout>
  );
};

export default MusicalAll;
