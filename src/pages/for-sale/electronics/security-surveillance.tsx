import React from "react";
import { AppLayout } from "@/layouts";
import { SalesPageSection } from "@/modules/main/ForSales";

const SalesSecurityPage: React.FC = () => {
  return (
    <AppLayout name="sale_ele_security">
      <SalesPageSection page="security-surveillance" />
    </AppLayout>
  );
};

export default SalesSecurityPage;
