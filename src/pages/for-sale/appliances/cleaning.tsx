import React from "react";
import { AppLayout } from "@/layouts";
import { SalesPageSection } from "@/modules/main/ForSales";

const SalesCleaningPage: React.FC = () => {
  return (
    <AppLayout name="sale_ele_cleaning">
      <SalesPageSection page="cleaning" />
    </AppLayout>
  );
};

export default SalesCleaningPage;
