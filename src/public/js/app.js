const messageList = document.querySelector("ul");
const messageForm = document.querySelector("form");
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

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = messageForm.querySelector("input").value;
  socket.send(message);
  messageForm.querySelector("input").value = "";
});
