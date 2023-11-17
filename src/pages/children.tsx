import React from "react";
import { AppLayout } from "@/layouts";
import { ChildrenPageSection } from "@/modules/main/Children";

const ChildrenPage: React.FC = () => {
  return (
    <AppLayout name="sales">
      <ChildrenPageSection />
    </AppLayout>
  );
};

export default ChildrenPage;
