import React from "react";
import { AppLayout } from "@/layouts";
import { ToysSection } from "@/modules/main/Toys";

const ToyHobbies: React.FC = () => {
  return (
    <AppLayout name="toys_hobbies_items_for_sale">
      <ToysSection page="/collectibles/hobbies-items-for-sale" />
    </AppLayout>
  );
};

export default ToyHobbies;
