import React from "react";
import { AppLayout } from "@/layouts";
import { SalesPageSection } from "@/modules/main/ForSales";

const SalesKitchenPage: React.FC = () => {
  return (
    <AppLayout name="sale_ele_kitchen">
      <SalesPageSection page="kitchen" />
    </AppLayout>
  );
};

export default SalesKitchenPage;
