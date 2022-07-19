"use strict";

import {
  BUTTON_BACK_TO_WELCOME_ID,
  HEADER_ID,
  OPEN_LIBRARY_BUTTON_ID,
  USER_INTERFACE_ID,
} from "../constant.js";
import { createHeaderElements } from "../views/headerView.js";
import { initSearchPage } from "./librarySearchPage.js";
import { initWelcomePage } from "./welcomePage.js";

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
