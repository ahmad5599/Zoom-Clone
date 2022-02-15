const messageList = document.querySelector("ul");
const messageForm = document.querySelector("#message");
const nicknameForm = document.querySelector("#nickname");
const socket = new WebSocket(`ws://${window.location.host}`);

function makeMessage(type, payload) {
  const msg = { type, payload }; //an object
  return JSON.stringify(msg);
}

socket.addEventListener("open", () => {
  console.log("Connected to server✅");
});
socket.addEventListener("close", () => {
  console.log("Disconnected from server❌");
});
socket.addEventListener("message", (message) => {
  const li = document.createElement("li");
  li.innerText = message.data;
  messageList.append(li);
});

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const message_input = messageForm.querySelector("input").value;
  socket.send(makeMessage("new_message", message_input));
  messageForm.querySelector("input").value = "";
});
nicknameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const nickname_input = nicknameForm.querySelector("input").value;
  socket.send(makeMessage("nickname", nickname_input));
  nicknameForm.querySelector("input").value = "";

  console.log(`current userName : ${nickname_input}`);
});
