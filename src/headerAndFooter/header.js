import { USER_INTERFACE_ID } from "../constant.js";

export function initHeader() {
  const userInterace = document.getElementById(USER_INTERFACE_ID);
  const headerDiv = document.createElement("div");

  headerDiv.innerHTML = createHeaderElements();
  userInterace.before(headerDiv);
}

function createHeaderElements() {
  const headerElements = String.raw`
    
        <h1>The header : Project Name</h1>
        <img src="http://" alt="logo image">
        <hr>
    `;

  return headerElements;
}
