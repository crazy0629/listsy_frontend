import React from "react";
import { AppLayout } from "@/layouts";
import { SalesPageSection } from "@/modules/main/ForSales";

const SalesTelevisionPage: React.FC = () => {
  return (
    <AppLayout name="sale_ele_tv">
      <SalesPageSection page="televisions" />
    </AppLayout>
  );
};

export default SalesTelevisionPage;
