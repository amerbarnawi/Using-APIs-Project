import {
  APP_INFO_ID,
  BUTTON_BACK_TO_WELCOME_ID,
  HEADER_ID,
  OPEN_LIBRARY_BUTTON_ID,
  USER_INTERFACE_ID,
} from "../constant.js";
import { initSearchPage } from "../pages/librarySearchPage.js";
import { initWelcomePage } from "../pages/welcomePage.js";

export async function initHeader() {
  const userInterace = document.getElementById(USER_INTERFACE_ID);
  const headerDiv = document.createElement("div");
  headerDiv.id = HEADER_ID;

  headerDiv.innerHTML = createHeaderElements();
  userInterace.before(headerDiv);

  const toWelcomeButton = document.getElementById(BUTTON_BACK_TO_WELCOME_ID);
  const toLibraryButton = document.getElementById(OPEN_LIBRARY_BUTTON_ID);

  toWelcomeButton.addEventListener("click", () => {
    initWelcomePage();
  });

  toLibraryButton.addEventListener("click", () => {
    initSearchPage();
  });
}

function createHeaderElements() {
  const headerElements = String.raw`
    
    <h2>OPEN<br>YOUR<br>MIND</h2>
    <h1>LIBRARY <br><span>OPEN YOUR MIND</span> </h1>
    <div>
      <button id = "${APP_INFO_ID}">APP INFO</button>
      <button id = "${BUTTON_BACK_TO_WELCOME_ID}">To Welcome</button>
      <button id=${OPEN_LIBRARY_BUTTON_ID}>Book search</button>
    </div>
    `;

  return headerElements;
}
