import React from "react";
import { AppLayout } from "@/layouts";
import { SalesPageSection } from "@/modules/main/ForSales";

const SalesSmartPage: React.FC = () => {
  return (
    <AppLayout name="sale_ele_smart">
      <SalesPageSection page="/for-sale/electronics/smart-home-devices" />
    </AppLayout>
  );
};

export default SalesSmartPage;
