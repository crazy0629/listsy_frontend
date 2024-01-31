import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";
import React from "react";

const MusicalEuphonium: React.FC = () => {
  return (
    <AppLayout name="musical_brass_euphonium">
      <MusicalSection
        page="/brass-instruments-for-sale/euphonium"
        sub="Brass Instruments"
      />
    </AppLayout>
  );
};

export default MusicalEuphonium;
