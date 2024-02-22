import React from "react";
import { AppLayout } from "@/layouts";
import { SportsSection } from "@/modules/main/Sports";

const SportsMiscellaneous: React.FC = () => {
  return (
    <AppLayout name="sports_miscellaneous">
      <SportsSection page="/for-sale/sports-fitness-equipment/miscellaneous" />
    </AppLayout>
  );
};

export default SportsMiscellaneous;
