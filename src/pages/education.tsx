import React from "react";
import { AppLayout } from "@/layouts";
import { EducationPageSection } from "@/modules/main/Education";

const EducationPage: React.FC = () => {
  return (
    <AppLayout name="sale">
      <EducationPageSection />
    </AppLayout>
  );
};

export default EducationPage;
