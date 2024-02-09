import React from "react";
import { AppLayout } from "@/layouts";
import { ToysSection } from "@/modules/main/Toys";

const ToyActionFigures: React.FC = () => {
  return (
    <AppLayout name="toys_games_all">
      <ToysSection page="/toys/toys-games-all" />
    </AppLayout>
  );
};

export default ToyActionFigures;
