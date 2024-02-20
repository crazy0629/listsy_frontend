import React from "react";
import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";

const MusicalOther: React.FC = () => {
  return (
    <AppLayout name="musical_other_instruments">
      <MusicalSection page="/for-sale/musical-instruments/other-instruments" />
    </AppLayout>
  );
};

export default MusicalOther;
