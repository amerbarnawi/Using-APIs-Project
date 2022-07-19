"use strict";

import { initFooter } from "./pages/footerPage.js";
import { initHeader } from "./pages/headerPage.js";
import { initWelcomePage } from "./pages/welcomePage.js";
import { updateFromStorageData } from "./storage.js";

const loadApp = () => {
  initHeader();
  initFooter();

  if (sessionStorage.storageBookData) {
    updateFromStorageData();
  } else {
    initWelcomePage();
  }
};

window.addEventListener("load", loadApp);
