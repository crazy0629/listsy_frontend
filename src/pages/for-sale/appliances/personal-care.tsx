import React from "react";
import { AppLayout } from "@/layouts";
import { SalesPageSection } from "@/modules/main/ForSales";

const SalesPersonalPage: React.FC = () => {
  return (
    <AppLayout name="sale_ele_personal">
      <SalesPageSection page="/for-sale/appliances/personal-care" />
    </AppLayout>
  );
};

export default SalesPersonalPage;
