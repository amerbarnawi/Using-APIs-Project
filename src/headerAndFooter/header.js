import { BUTTON_BACK_TO_WELCOME_ID, USER_INTERFACE_ID } from "../constant.js";
import { initWelcomePage } from "../pages/welcomePage.js";

export async function initHeader() {
  const userInterace = document.getElementById(USER_INTERFACE_ID);
  const headerDiv = document.createElement("div");

  headerDiv.innerHTML = createHeaderElements();
  userInterace.before(headerDiv);

  const toWelcomeButton = document.getElementById(BUTTON_BACK_TO_WELCOME_ID);
  toWelcomeButton.addEventListener("click", () => {
    initWelcomePage();
  });
}

function createHeaderElements() {
  const headerElements = String.raw`
    
        <h1>The header : Project Name</h1>
        <img src="http://" alt="logo image">
        <button id = "${BUTTON_BACK_TO_WELCOME_ID}">To Welcome</button>
        <hr>
    `;

  return headerElements;
}
