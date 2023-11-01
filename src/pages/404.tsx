import React from "react";
import { AppLayout } from "@/layouts";
import * as Section from "@/modules/404";

const NotFound: React.FC = () => {
  return (
    <AppLayout name="404" noSidebar>
      <Section.NotFound />
    </AppLayout>
  );
};

export default NotFound;
