import React from "react";
import { AppLayout } from "@/layouts";
import { SalesPageSection } from "@/modules/main/ForSales";

const SalesComputerPage: React.FC = () => {
  return (
    <AppLayout name="sale_ele_computer">
      <SalesPageSection page="/for-sale/electronics/computer-components-storage" />
    </AppLayout>
  );
};

export default SalesComputerPage;
