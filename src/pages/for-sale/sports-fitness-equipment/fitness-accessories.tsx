import React from "react";
import { AppLayout } from "@/layouts";
import { SportsSection } from "@/modules/main/Sports";

const SportsCardio: React.FC = () => {
  return (
    <AppLayout name="sports_fitness">
      <SportsSection page="/for-sale/sports-fitness-equipment/fitness-accessories" />
    </AppLayout>
  );
};

export default SportsCardio;
