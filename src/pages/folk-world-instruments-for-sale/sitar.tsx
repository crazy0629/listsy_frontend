import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalSitar: React.FC = () => {
  return (
    <AppLayout name="musical_fork_sitar">
      <MusicalSection
        page="/folk-world-instruments-for-sale/sitar"
        sub="Folk and World Instruments"
      />
    </AppLayout>
  );
};

export default MusicalSitar;
