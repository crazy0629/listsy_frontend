import React from "react";
import { AppLayout } from "@/layouts";
import { SalesPageSection } from "@/modules/main/ForSales";

const SalesAllPage: React.FC = () => {
  return (
    <AppLayout name="sale_ele_all">
      <SalesPageSection page="/for-sale/electronics/all" />
    </AppLayout>
  );
};

export default SalesAllPage;
