import React from "react";
import { AppLayout } from "@/layouts";
import { EstatePageSection } from "@/modules/main";

const EstatePage: React.FC = () => {
  return (
    <AppLayout name="estate">
      <EstatePageSection />
    </AppLayout>
  );
};

export default EstatePage;
