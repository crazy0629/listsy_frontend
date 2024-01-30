import React from "react";
import { AppLayout } from "@/layouts";
import { SalesPageSection } from "@/modules/main/ForSales";

const SalesOfficePage: React.FC = () => {
  return (
    <AppLayout name="sale_ele_office">
      <SalesPageSection page="/for-sale/electronics/office-equipment" />
    </AppLayout>
  );
};

export default SalesOfficePage;
