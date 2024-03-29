import React from "react";
import { AppLayout } from "@/layouts";
import { SalesPageSection } from "@/modules/main/ForSales";

const SalesLaundryPage: React.FC = () => {
  return (
    <AppLayout name="sale_ele_laundry">
      <SalesPageSection page="/for-sale/appliances/laundry" />
    </AppLayout>
  );
};

export default SalesLaundryPage;
