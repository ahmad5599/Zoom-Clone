<<<<<<< HEAD
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
=======
const socket = io();
>>>>>>> b4ecb37600b7158958d661cf1cbe2d778005c411

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");

room.hidden = true;

let roomName;

function addMsg(msg) {
  const ul = room.querySelector("ul");
  const li = document.createElement("li");
  li.innerText = msg;
  ul.appendChild(li);
}

<<<<<<< HEAD
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
=======
function showRoom() {
  welcome.hidden = true;
  room.hidden = false;
  const h3 = room.querySelector("h3");
  h3.innerText = `Room ${roomName}`;
}

function handleRoomSubmit(event) {
  event.preventDefault();
  const input = form.querySelector("input");
  socket.emit("enter_room", input.value, showRoom);
  roomName = input.value;
  input.value = "";
}

form.addEventListener("submit", handleRoomSubmit);

socket.on("welcome", () => {
  addMsg("Someone joined!");
>>>>>>> b4ecb37600b7158958d661cf1cbe2d778005c411
});
