import React from "react";
import { AppLayout } from "@/layouts";
import { DiyCraftSection } from "@/modules/main/DiyCraft";

const DiyCrafting: React.FC = () => {
  return (
    <AppLayout name="diy_crafting">
      <DiyCraftSection page="/for-sale/crafting-tools-supplies" />
    </AppLayout>
  );
};

export default DiyCrafting;
