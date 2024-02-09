import React from "react";
import { AppLayout } from "@/layouts";
import { ToysSection } from "@/modules/main/Toys";

const ToyCardGames: React.FC = () => {
  return (
    <AppLayout name="toys_cards_board_games_for_sale">
      <ToysSection page="/games/card-games-for-sale" />
    </AppLayout>
  );
};

export default ToyCardGames;
