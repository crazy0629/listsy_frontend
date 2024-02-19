import React from "react";
import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";

const MusicalFolk: React.FC = () => {
  return (
    <AppLayout name="musical_folk_world_instruments">
      <MusicalSection page="/musical-instruments/folk-and-world-instruments" />
    </AppLayout>
  );
};

export default MusicalFolk;
