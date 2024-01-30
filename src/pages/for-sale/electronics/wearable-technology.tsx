import React from "react";
import { AppLayout } from "@/layouts";
import { SalesPageSection } from "@/modules/main/ForSales";

const SalesWearablePage: React.FC = () => {
  return (
    <AppLayout name="sale_ele_wearable">
      <SalesPageSection page="/for-sale/electronics/wearable-technology" />
    </AppLayout>
  );
};

export default SalesWearablePage;
