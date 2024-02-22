import React from "react";
import { AppLayout } from "@/layouts";
import { SportsSection } from "@/modules/main/Sports";

const SportsYoga: React.FC = () => {
  return (
    <AppLayout name="sports_strength">
      <SportsSection page="/for-sale/sports-fitness-equipment/strength-training-equipment" />
    </AppLayout>
  );
};

export default SportsYoga;
