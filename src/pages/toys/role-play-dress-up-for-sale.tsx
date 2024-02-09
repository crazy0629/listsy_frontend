import React from "react";
import { AppLayout } from "@/layouts";
import { ToysSection } from "@/modules/main/Toys";

const ToyRolePlay: React.FC = () => {
  return (
    <AppLayout name="toys_role_play_dress_up_for_sale">
      <ToysSection page="/toys/role-play-dress-up-for-sale" />
    </AppLayout>
  );
};

export default ToyRolePlay;
