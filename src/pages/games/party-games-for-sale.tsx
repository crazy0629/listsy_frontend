import React from "react";
import { AppLayout } from "@/layouts";
import { ToysSection } from "@/modules/main/Toys";

const ToyPartyGames: React.FC = () => {
  return (
    <AppLayout name="toys_party_games_for_sale">
      <ToysSection page="/games/party-games-for-sale" />
    </AppLayout>
  );
};

export default ToyPartyGames;
