import React from "react";
import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";

const MusicalAll: React.FC = () => {
  return (
    <AppLayout name="musical_all_instruments">
      <MusicalSection page="/musical-instruments/all-instruments" />
    </AppLayout>
  );
};

export default MusicalAll;
