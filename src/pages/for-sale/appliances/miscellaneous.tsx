import React from "react";
import { AppLayout } from "@/layouts";
import { SalesPageSection } from "@/modules/main/ForSales";

const SalesMiscellaneousPage: React.FC = () => {
  return (
    <AppLayout name="sale_ele_miscellaneous">
      <SalesPageSection page="/for-sale/appliances/miscellaneous" />
    </AppLayout>
  );
};

export default SalesMiscellaneousPage;
