import React from "react";
import { AppLayout } from "@/layouts";
import { ToysSection } from "@/modules/main/Toys";

const ToyBoardGames: React.FC = () => {
  return (
    <AppLayout name="toys_games_board_games_for_sale">
      <ToysSection page="/games/board-games-for-sale" />
    </AppLayout>
  );
};

export default ToyBoardGames;
