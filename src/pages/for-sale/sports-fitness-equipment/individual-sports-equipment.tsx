import React from "react";
import { AppLayout } from "@/layouts";
import { SportsSection } from "@/modules/main/Sports";

const SportsIndividual: React.FC = () => {
  return (
    <AppLayout name="sports_individual">
      <SportsSection page="/for-sale/sports-fitness-equipment/individual-sports-equipment" />
    </AppLayout>
  );
};

export default SportsIndividual;
