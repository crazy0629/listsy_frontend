import React from "react";
import { AppLayout } from "@/layouts";
import { FashionPageSection } from "@/modules/main/Fashion";

const FashionPage: React.FC = () => {
  return (
    <AppLayout name="sales">
      <FashionPageSection />
    </AppLayout>
  );
};

export default FashionPage;
