import React from "react";
import { AppLayout } from "@/layouts";
import { SportsPageSection } from "@/modules/main/Sports";

const SportsPage: React.FC = () => {
  return (
    <AppLayout name="sale">
      <SportsPageSection />
    </AppLayout>
  );
};

export default SportsPage;
