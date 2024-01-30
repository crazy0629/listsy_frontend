import React from "react";
import { AppLayout } from "@/layouts";
import { SalesPageSection } from "@/modules/main/ForSales";

const SalesHomeTheaterPage: React.FC = () => {
  return (
    <AppLayout name="sale_ele_home">
      <SalesPageSection page="home-theater-systems" />
    </AppLayout>
  );
};

export default SalesHomeTheaterPage;
