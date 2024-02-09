import React from "react";
import { AppLayout } from "@/layouts";
import { ToysSection } from "@/modules/main/Toys";

const ToyRemoteControl: React.FC = () => {
  return (
    <AppLayout name="toys_remote_control_toys_for_sale">
      <ToysSection page="/toys/remote-control-toys-for-sale" />
    </AppLayout>
  );
};

export default ToyRemoteControl;
