import React from "react";
import { AppLayout } from "@/layouts";
import { ToysSection } from "@/modules/main/Toys";

const ToyOutdoor: React.FC = () => {
  return (
    <AppLayout name="toys_outdoor_play_toys_for_sale">
      <ToysSection page="/toys/outdoor-play-toys-for-sale" />
    </AppLayout>
  );
};

export default ToyOutdoor;
