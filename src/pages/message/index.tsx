import React from "react";
import { AppLayout } from "@/layouts";
import { MessageRoom } from "@/modules/message";

const MessageRoomPage: React.FC = () => {
  return (
    <AppLayout name="" noSidebar={true}>
      <MessageRoom />
    </AppLayout>
  );
};

export default MessageRoomPage;
