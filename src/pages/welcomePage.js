"use strict";

import { OPEN_LIBRARY_BUTTON_ID, USER_INTERFACE_ID } from "../constant.js";
import { createWelcomeElements } from "../views/welcomeView.js";
import { renderNasaData } from "../features/WelcomePageFeatures/nasa.js";
import { renderQuoteData } from "../features/WelcomePageFeatures/quote.js";
import { renderFunFactData } from "../features/WelcomePageFeatures/funFact.js";
import { initSearchPage } from "./librarySearchPage.js";
import { refreshSessionStorage } from "../storage.js";
import { libraryData } from "../data.js";

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
