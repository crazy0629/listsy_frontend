import React from "react";
import { AppLayout } from "@/layouts";
import { TruckPageSection } from "@/modules/main/Truck";

const TruckPage: React.FC = () => {
  return (
    <AppLayout name="truck">
      <TruckPageSection />
    </AppLayout>
  );
};

export default TruckPage;
