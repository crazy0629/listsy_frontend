import React from "react";
import { AppLayout } from "@/layouts";
import { SalesPageSection } from "@/modules/main/ForSales";
import { ForSalePageWrapper } from "@/modules/main/wrapper/forsale";

const SalesAllPage: React.FC = () => {
  return (
    <AppLayout name="sale_ele_all">
      {/* <ForSalePageWrapper page="all"> */}
      <SalesPageSection page="all" />
      {/* </ForSalePageWrapper> */}
    </AppLayout>
  );
};

export default SalesAllPage;
