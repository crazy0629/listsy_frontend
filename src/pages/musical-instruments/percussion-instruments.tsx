import React from "react";
import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";

const MusicalPercussion: React.FC = () => {
  return (
    <AppLayout name="musical_percussion_instruments">
      <MusicalSection page="/musical-instruments/percussion-instruments" />
    </AppLayout>
  );
};

export default MusicalPercussion;
