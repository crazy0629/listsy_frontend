import React from "react";
import { AppLayout } from "@/layouts";
import { ChildrenPageSection } from "@/modules/main/Children";

const ChildrenPage: React.FC = () => {
  return (
    <AppLayout name="sale">
      <ChildrenPageSection />
    </AppLayout>
  );
};

export default ChildrenPage;
