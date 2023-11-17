import React from "react";
import { AppLayout } from "@/layouts";
import { GardenPageSection } from "@/modules/main/Garden";

const GardenPage: React.FC = () => {
  return (
    <AppLayout name="sales">
      <GardenPageSection />
    </AppLayout>
  );
};

export default GardenPage;
