const app = require("express")();
/**
 * using express created & initialized the app
 * const express = require('express')
 * const app = express()
 */

const server = require("http").createServer(app);
/**
 * created the server first
 * from docu of socket.io init
 * const httpServer = createServer();
 */

const io = require("socket.io")(server, {
  // options - TODO:
});
/**
 * created the connection between sercer & socketio
 * from docu this part
 * import { Server } from "socket.io";
 * const io = new Server(httpServer, {
 *      // ...
 * })
 */

io.on("connection", (socket) => {
  // enabling the socket
  console.log("What is socket? : ", socket);
  console.log("Socket is READY to be connected:::");

  //   listen-response to events to pass infos
  socket.on("chat", (payload) => {
    console.log("What is Payload? : ", payload); // listen
    // respond broadcast
    io.emit("chat", payload);
  });
});
/**
 * listening to events
 * io.on("connection", (socket) => {
 *   // ...
 * });
 */

// listning to port

// espress way won't work, will run app via express, not server via io
// app.listen(5000, () => console.log("server is active..."));
// socket
server.listen(5000, () =>
  console.log("Server is listening at http://localhost:5000")
);
