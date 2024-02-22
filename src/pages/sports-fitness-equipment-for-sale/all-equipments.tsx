import React from "react";
import { AppLayout } from "@/layouts";
import { SportsSection } from "@/modules/main/Sports";

const SportsAll: React.FC = () => {
  return (
    <AppLayout name="sports_all">
      <SportsSection page="/sports-fitness-equipment-for-sale/all-equipments" />
    </AppLayout>
  );
};

export default SportsAll;
