import React from "react";
import { AppLayout } from "@/layouts";
import { SportsSection } from "@/modules/main/Sports";

const SportsOutdoor: React.FC = () => {
  return (
    <AppLayout name="sports_outdoor">
      <SportsSection page="/for-sale/sports-fitness-equipment/outdoor-adventure-sports" />
    </AppLayout>
  );
};

export default SportsOutdoor;
