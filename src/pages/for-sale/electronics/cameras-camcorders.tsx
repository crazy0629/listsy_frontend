import React from "react";
import { AppLayout } from "@/layouts";
import { SalesPageSection } from "@/modules/main/ForSales";

const SalesCameraPage: React.FC = () => {
  return (
    <AppLayout name="sale_ele_camera">
      <SalesPageSection page="/for-sale/electronics/cameras-camcorders" />
    </AppLayout>
  );
};

export default SalesCameraPage;
