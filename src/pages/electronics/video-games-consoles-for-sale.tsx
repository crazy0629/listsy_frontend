import React from "react";
import { AppLayout } from "@/layouts";
import { ToysSection } from "@/modules/main/Toys";

const ToyElectronicsVideoGames: React.FC = () => {
  return (
    <AppLayout name="toys_electronics_video_games">
      <ToysSection page="/electronics/video-games-consoles-for-sale" />
    </AppLayout>
  );
};

export default ToyElectronicsVideoGames;
