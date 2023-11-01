import { AppLayout } from "@/layouts";
import { JobsPageSection } from "@/modules/main/Jobs";
import React from "react";

const JobsPage: React.FC = () => {
  return (
    <AppLayout name="jobs">
      <JobsPageSection />
    </AppLayout>
  );
};

export default JobsPage;
