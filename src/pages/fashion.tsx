import React from "react";
import { AppLayout } from "@/layouts";
import { FashionPageSection } from "@/modules/main/Fashion";

const FashionPage: React.FC = () => {
  return (
    <AppLayout name="sale">
      <FashionPageSection />
    </AppLayout>
  );
};

export default FashionPage;
