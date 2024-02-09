import React from "react";
import { AppLayout } from "@/layouts";
import { ToysSection } from "@/modules/main/Toys";

const ToyElectronicGames: React.FC = () => {
  return (
    <AppLayout name="toys_electronic_games_for_sale">
      <ToysSection page="/games/electronic-games-for-sale" />
    </AppLayout>
  );
};

export default ToyElectronicGames;
