import React from "react";
import { AppLayout } from "@/layouts";
import { SalesPageSection } from "@/modules/main/ForSales";

const SalesMusicPage: React.FC = () => {
  return (
    <AppLayout name="sale_ele_music">
      <SalesPageSection page="portable-music-players" />
    </AppLayout>
  );
};

export default SalesMusicPage;
