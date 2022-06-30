const socket = new WebSocket(`ws://${window.location.host}`);
const msgForm = document.querySelector("#message");
const nickNameForm = document.querySelector("#nickname");
const message_list = document.querySelector("ul");

socket.addEventListener("open", () => {
  console.log("connected from server✅");
});
socket.addEventListener("close", () => {
  console.log("disconnected from server❌");
});
socket.addEventListener("message", (msg) => {
  const li = document.createElement("li");
  li.innerText = msg.data;
  message_list.append(li);
});

function makeMessage(type, payload) {
  const msg = { type, payload }; //an object
  return JSON.stringify(msg);
}

msgForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let msg_input = msgForm.querySelector("input").value;
  socket.send(makeMessage("new_message", msg_input));
  msgForm.querySelector("input").value = "";
});
nickNameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let nickName_input = nickNameForm.querySelector("input").value;
  socket.send(makeMessage("nickname", nickName_input));
  nickNameForm.querySelector("input").value = "";

  console.log(`current userName : ${nickName_input}`);
});
