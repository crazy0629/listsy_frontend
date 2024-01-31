import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalTable: React.FC = () => {
  return (
    <AppLayout name="musical_fork_tabla">
      <MusicalSection
        page="/folk-world-instruments-for-sale/tabla"
        sub="Folk and World Instruments"
      />
    </AppLayout>
  );
};

export default MusicalTable;
