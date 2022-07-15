"use strict";

import { USER_INTERFACE_ID } from "../constant.js";
import { createWelcomeElements } from "../views/welcomeView.js";
import { renderNasaData } from "../features/WelcomePageFeatures/nasaData.js";
import { renderQuoteData } from "../features/WelcomePageFeatures/quoteData.js";
import { renderFunFactData } from "../features/WelcomePageFeatures/funFactData.js";

export function initWelcomePage() {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = "";

  const welcomeElements = createWelcomeElements();
  userInterface.appendChild(welcomeElements);

  // renderNasaData();
  renderQuoteData();
  renderFunFactData();
}
