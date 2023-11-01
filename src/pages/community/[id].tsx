import { AppLayout } from "@/layouts";
import { CommunityRoom } from "@/modules/community";
import React from "react";

const CommunityRoomPage: React.FC = () => {
  return (
    <AppLayout name="">
      <CommunityRoom />
    </AppLayout>
  );
};

export default CommunityRoomPage;
