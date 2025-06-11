import { io } from "socket.io-client";
import { SOCKET_URL } from "./Constants";

const socket = io(SOCKET_URL || "http://localhost:5000", {
  transports: ["websocket"],
  reconnection: true,
});

const socketService = {
  emit: (event, data) => {
    socket.emit(event, data);
  },

  on: (event, callback) => {
    socket.on(event, callback);
  },

  off: (event) => {
    socket.off(event);
  },
  
  onAny: (callback) => {
    socket.onAny(callback);
  },

  offAny: (callback) => {
    socket.offAny(callback);
  },

  getSocket: () => socket,
};

export default socketService;
