import React from "react";
import { AppLayout } from "@/layouts";
import { SalesPageSection } from "@/modules/main/ForSales";

const SalesIpadPage: React.FC = () => {
  return (
    <AppLayout name="sale_ele_ipad">
      <SalesPageSection page="/for-sale/electronics/ipad-tablets-ereaders" />
    </AppLayout>
  );
};

export default SalesIpadPage;
