import React from "react";
import { AppLayout } from "@/layouts";
import { SalesPageSection } from "@/modules/main/ForSales";

const SalesNetworkingPage: React.FC = () => {
  return (
    <AppLayout name="sale_ele_networking">
      <SalesPageSection page="/for-sale/electronics/networking-devices" />
    </AppLayout>
  );
};

export default SalesNetworkingPage;
