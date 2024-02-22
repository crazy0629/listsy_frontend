import React from "react";
import { AppLayout } from "@/layouts";
import { SportsSection } from "@/modules/main/Sports";

const SportsTeam: React.FC = () => {
  return (
    <AppLayout name="sports_team">
      <SportsSection page="/for-sale/sports-fitness-equipment/team-sports-equipment" />
    </AppLayout>
  );
};

export default SportsTeam;
