import express from "express";
import path, { parse } from "path";
import http from "http";
import { Server } from "socket.io";
// import { WebSocketServer } from "ws"; // this is the new way due to an upgrade

const app = express();
const __dirname = path.resolve();

app.set("view engine", "pug");
app.set("views", __dirname + "/src/views");
app.use("/public", express.static(__dirname + "/src/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const httpServer = http.createServer(app); //create a server
const wsServer = new Server(httpServer);
// const wss = new WebSocketServer({ server }); //create a websocket server

// const sockets = []; //array of users i.e. sockets

// wss.on("connection", (socket) => {
//   sockets.push(socket);
//   socket["nickname"] = "Annon";

//   console.log("Connected to server✅");
//   socket.on("close", () => {
//     console.log("Disconnected from browser❌");
//   });
//   socket.on("message", (msg) => {
//     const parsed = JSON.parse(msg);
//     switch (parsed.type) {
//       case "new_message":
//         sockets.forEach((aSocket) =>
//           aSocket.send(`${socket.nickname}: ${parsed.payload}`)
//         );
//         break;
//       case "nickname":
//         socket["nickname"] = parsed.payload;
//         break;
//     }
//   });
// });

httpServer.listen(2000, () => {
  console.log(`Listening on http://localhost:2000`);
});
