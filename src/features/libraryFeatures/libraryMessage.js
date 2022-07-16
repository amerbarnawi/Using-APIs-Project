import { LIBRARY_MESSAGE_ID } from "../../constant.js";

export function messageFromLibrary(message) {
  const msgDiv = document.getElementById(LIBRARY_MESSAGE_ID);
  msgDiv.innerHTML = "";
  const waitText = document.createElement("h3");
  waitText.textContent = message;
  msgDiv.appendChild(waitText);
}
