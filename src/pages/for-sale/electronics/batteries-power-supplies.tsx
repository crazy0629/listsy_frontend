import React from "react";
import { AppLayout } from "@/layouts";
import { SalesPageSection } from "@/modules/main/ForSales";

const SalesBatteriesPage: React.FC = () => {
  return (
    <AppLayout name="sale_ele_batteries">
      <SalesPageSection page="/for-sale/electronics/batteries-power-supplies" />
    </AppLayout>
  );
};

export default SalesBatteriesPage;
