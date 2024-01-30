import React from "react";
import { AppLayout } from "@/layouts";
import { SalesPageSection } from "@/modules/main/ForSales";

const SalesHeatingPage: React.FC = () => {
  return (
    <AppLayout name="sale_ele_heating">
      <SalesPageSection page="/for-sale/appliances/heating-cooling-air-quality" />
    </AppLayout>
  );
};

export default SalesHeatingPage;
