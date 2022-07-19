"use strict";

import { OPEN_LIBRARY_BUTTON_ID, USER_INTERFACE_ID } from "../constant.js";
import { createWelcomeElements } from "../views/welcomeView.js";

import { initSearchPage } from "./librarySearchPage.js";
import { refreshSessionStorage } from "../storage.js";
import { libraryData } from "../data.js";
import { renderNasaData } from "./nasaPage.js";
import { renderQuoteData } from "./quotePage.js";
import { renderFunFactData } from "./funFactPage.js";

export function initWelcomePage() {
  // Data for the session storage.
  libraryData.currentPage.searchPage = false;
  libraryData.currentPage.bookDetailsPage = false;
  refreshSessionStorage();

  //initWelcomePage.
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = "";

  const welcomeElements = createWelcomeElements();
  userInterface.appendChild(welcomeElements);

  renderNasaData();
  renderQuoteData();
  renderFunFactData();
}
