import { LIBRARY_MESSAGE_ID } from "../../constant.js";

export function renderMessage(message) {
  const msgDiv = document.getElementById(LIBRARY_MESSAGE_ID);
  msgDiv.style.display = "block";
  msgDiv.innerHTML = "";
  const waitText = document.createElement("h3");
  waitText.innerHTML = `<span>Message:</span> ${message}`;
  msgDiv.appendChild(waitText);
}
