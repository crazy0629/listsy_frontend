import React from "react";
import { AppLayout } from "@/layouts";
import { ToysSection } from "@/modules/main/Toys";

const ToyPuzzles: React.FC = () => {
  return (
    <AppLayout name="toys_puzzles_for_sale">
      <ToysSection page="/games/puzzles-for-sale" />
    </AppLayout>
  );
};

export default ToyPuzzles;
