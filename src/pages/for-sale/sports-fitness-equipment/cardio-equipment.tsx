import React from "react";
import { AppLayout } from "@/layouts";
import { SportsSection } from "@/modules/main/Sports";

const SportsCardio: React.FC = () => {
  return (
    <AppLayout name="sports_cardio">
      <SportsSection page="/for-sale/sports-fitness-equipment/cardio-equipment" />
    </AppLayout>
  );
};

export default SportsCardio;
