"use strict";

import { initFooter } from "./headerAndFooter/footer.js";
import { initHeader } from "./headerAndFooter/header.js";
import { initWelcomePage } from "./pages/welcomePage.js";

const loadApp = () => {
  initHeader();
  initFooter();
  initWelcomePage();
};

window.addEventListener("load", loadApp);
