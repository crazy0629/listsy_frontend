import React from "react";
import { AppLayout } from "@/layouts";
import { SalesPageSection } from "@/modules/main/ForSales";

const SalesGamingPage: React.FC = () => {
  return (
    <AppLayout name="sale_ele_gaming">
      <SalesPageSection page="gaming-consoles-accessories" />
    </AppLayout>
  );
};

export default SalesGamingPage;
