import { LIBRARY_MESSAGE_ID } from "../../constant.js";

export function messageFromLibrary(message, element) {
  element.innerHTML = "";
  const waitText = document.createElement("p");
  waitText.id = LIBRARY_MESSAGE_ID;
  waitText.textContent = message;
  element.appendChild(waitText);
}
