import React from "react";
import { AppLayout } from "@/layouts";
import { SportsSection } from "@/modules/main/Sports";

const SportsBoxing: React.FC = () => {
  return (
    <AppLayout name="sports_boxing">
      <SportsSection page="/for-sale/sports-fitness-equipment/boxing-martial-arts" />
    </AppLayout>
  );
};

export default SportsBoxing;
