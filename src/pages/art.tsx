import React from "react";
import { AppLayout } from "@/layouts";
import { ArtPageSection } from "@/modules/main/Art";

const ArtPage: React.FC = () => {
  return (
    <AppLayout name="sale">
      <ArtPageSection />
    </AppLayout>
  );
};

export default ArtPage;
