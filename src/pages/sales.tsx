import React from "react";
import { AppLayout } from "@/layouts";
import { SalesPageSection } from "@/modules/main/ForSales";

const SalesPage: React.FC = () => {
  return (
    <AppLayout name="sales">
      <SalesPageSection />
    </AppLayout>
  );
};

export default SalesPage;
