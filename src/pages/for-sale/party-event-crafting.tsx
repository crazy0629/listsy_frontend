import React from "react";
import { AppLayout } from "@/layouts";
import { DiyCraftSection } from "@/modules/main/DiyCraft";

const DiyParty: React.FC = () => {
  return (
    <AppLayout name="diy_party">
      <DiyCraftSection page="/for-sale/party-event-crafting" />
    </AppLayout>
  );
};

export default DiyParty;
