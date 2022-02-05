const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
  console.log("Connected to server✅");
});
socket.addEventListener("message", (message) => {
  console.log(message.data);
});
socket.addEventListener("close", () => {
  console.log("Disconnected from server❌");
});

setTimeout(() => {
  socket.send("Hello to the server from the browser");
}, 10000);
