import React from "react";
import { AppLayout } from "@/layouts";
import { ToysSection } from "@/modules/main/Toys";

const ToyArtCrafts: React.FC = () => {
  return (
    <AppLayout name="toys_arts_crafts_for_sale">
      <ToysSection page="/toys/arts-crafts-for-sale" />
    </AppLayout>
  );
};

export default ToyArtCrafts;
