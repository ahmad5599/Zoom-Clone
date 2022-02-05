import express from "express";
import path from "path";
import http from "http";
import { WebSocketServer } from "ws"; // this is the new way due to an upgrade

const app = express();
const __dirname = path.resolve();

app.set("view engine", "pug");
app.set("views", __dirname + "/src/views");
app.use("/public", express.static(__dirname + "/src/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const server = http.createServer(app); //create a server
const wss = new WebSocketServer({ server }); //create a websocket server

const sockets = []; //array of users i.e. sockets

server.listen(2000, () => {
  console.log(`Listening on http://localhost:2000`);
});

wss.on("connection", (socket) => {
  sockets.push(socket);
  socket.on("open", () => {
    console.log("Connected to server✅");
  });
  socket.on("close", () => {
    console.log("Disconnected from browser❌");
  });
  socket.on("message", (message) => {
    console.log(message.toString("utf8"));
    sockets.forEach((aSocket) => aSocket.send(message.toString("utf8")));
  });
});
