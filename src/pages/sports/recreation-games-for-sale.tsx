import React from "react";
import { AppLayout } from "@/layouts";
import { ToysSection } from "@/modules/main/Toys";

const ToyRecreationGames: React.FC = () => {
  return (
    <AppLayout name="toys_recreation_games_for_sale">
      <ToysSection page="/sports/recreation-games-for-sale" />
    </AppLayout>
  );
};

export default ToyRecreationGames;
