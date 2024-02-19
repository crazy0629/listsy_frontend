import React from "react";
import { AppLayout } from "@/layouts";
import { MusicalSection } from "@/modules/main/Musical";

const MusicalString: React.FC = () => {
  return (
    <AppLayout name="musical_string_instruments">
      <MusicalSection page="/musical-instruments/string-instruments" />
    </AppLayout>
  );
};

export default MusicalString;
