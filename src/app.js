"use strict";

import { initFooter } from "./headerAndFooter/footer.js";
import { initHeader } from "./headerAndFooter/header.js";
import { initWelcomePage } from "./pages/welcomePage.js";
import { updateFromStorageData } from "./storage.js";

const loadApp = () => {
  initHeader();
  initFooter();

  if (sessionStorage.strgBkData) {
    updateFromStorageData();
  } else {
    initWelcomePage();
  }
};

window.addEventListener("load", loadApp);
