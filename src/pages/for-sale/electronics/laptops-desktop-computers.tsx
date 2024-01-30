import React from "react";
import { AppLayout } from "@/layouts";
import { SalesPageSection } from "@/modules/main/ForSales";

const SalesLaptopPage: React.FC = () => {
  return (
    <AppLayout name="sale_ele_laptop">
      <SalesPageSection page="/for-sale/electronics/laptops-desktop-computers" />
    </AppLayout>
  );
};

export default SalesLaptopPage;
