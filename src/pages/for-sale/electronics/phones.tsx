import React from "react";
import { AppLayout } from "@/layouts";
import { SalesPageSection } from "@/modules/main/ForSales";

const SalesPhonePage: React.FC = () => {
  return (
    <AppLayout name="sale_ele_phone">
      <SalesPageSection page="phones" />
    </AppLayout>
  );
};

export default SalesPhonePage;
