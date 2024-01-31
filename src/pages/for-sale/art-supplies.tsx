import React from "react";
import { AppLayout } from "@/layouts";
import { DiyCraftSection } from "@/modules/main/DiyCraft";

const DiyArt: React.FC = () => {
  return (
    <AppLayout name="diy_art">
      <DiyCraftSection page="/for-sale/art-supplies" />
    </AppLayout>
  );
};

export default DiyArt;
