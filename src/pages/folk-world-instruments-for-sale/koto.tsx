import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalKoto: React.FC = () => {
  return (
    <AppLayout name="musical_fork_koto">
      <MusicalSection
        page="/folk-world-instruments-for-sale/koto"
        sub="Folk and World Instruments"
      />
    </AppLayout>
  );
};

export default MusicalKoto;
