import React from "react";
import { AppLayout } from "@/layouts";
import { SalesPageSection } from "@/modules/main/ForSales";

const SalesTelevisionPage: React.FC = () => {
  return (
    <AppLayout name="sale_ele_tv">
      <SalesPageSection page="/for-sale/electronics/televisions" />
    </AppLayout>
  );
};

export default SalesTelevisionPage;
