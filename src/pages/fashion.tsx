import React from "react";
import { AppLayout } from "@/layouts";
import { FashionSection } from "@/modules/main/Fashion";

const FashionPage: React.FC = () => {
  return (
    <AppLayout name="sale">
      <FashionSection />
    </AppLayout>
  );
};

export default FashionPage;
