import { SERVER_UPLOAD_URI } from "@/config";
import { createContext } from "react";
import { io } from "socket.io-client/debug";

export const Auth = createContext({});

// const socket = io(SERVER_UPLOAD_URI, {
//     query: { userId: authContext.user.id },
//   });
