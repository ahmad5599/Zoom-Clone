import express from "express";
import path, { parse } from "path";
import http from "http";
import { Server } from "socket.io";

const app = express();
const __dirname = path.resolve();

app.set("view engine", "pug");
app.set("views", __dirname + "/src/views");
app.use("/public", express.static(__dirname + "/src/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const httpServer = http.createServer(app); //create a server
const wsServer = new Server(httpServer); //create a websocket server using socket.io framework

wsServer.on("connection", (socket) => {
  socket.onAny((event) => {
<<<<<<< HEAD
    console.log(`Socket Event:${event}`);
  });
  socket.on("enter_room", (roomName, done) => {
    socket.join(roomName);
    done();
    socket.to(roomName).emit("welcome");
  });
});

<<<<<<< HEAD
const handleListen = () => console.log(`Listening on http://localhost:3000`);

server.listen(3000, handleListen);

wss.on("connection", (socket) => {
  sockets.push(socket);
  socket["nickname"] = "Annon";

  console.log("connected to browser✅");
  socket.on("close", () => {
    console.log("disconnected from brower❌");
  });
  socket.on("message", (msg) => {
    const parsed = JSON.parse(msg);
    switch (parsed.type) {
      case "new_message":
        sockets.forEach((aSocket) =>
          aSocket.send(`${socket["nickname"]}: ${parsed.payload}`)
        );
        break;
      case "nickname":
        socket["nickname"] = parsed.payload;
        break;
    }
  });
=======
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
>>>>>>> b4ecb37600b7158958d661cf1cbe2d778005c411
});
