import React from "react";
import { AppLayout } from "@/layouts";
import { ToysSection } from "@/modules/main/Toys";

const ToyMagic: React.FC = () => {
  return (
    <AppLayout name="toys_magic_novelty_toys_for_sale">
      <ToysSection page="/toys/magic-novelty-toys-for-sale" />
    </AppLayout>
  );
};

export default ToyMagic;
