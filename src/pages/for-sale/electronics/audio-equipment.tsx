import React from "react";
import { AppLayout } from "@/layouts";
import { SalesPageSection } from "@/modules/main/ForSales";

const SalesAudioPage: React.FC = () => {
  return (
    <AppLayout name="sale_ele_audio">
      <SalesPageSection page="audio-equipment" />
    </AppLayout>
  );
};

export default SalesAudioPage;
