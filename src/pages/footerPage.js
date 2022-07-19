"use strict";

import { FOOTER_ID, USER_INTERFACE_ID } from "../constant.js";
import { createFooterElements } from "../views/footerView.js";

export function initFooter() {
  const userInterace = document.getElementById(USER_INTERFACE_ID);
  const footerDiv = document.createElement("div");
  footerDiv.id = FOOTER_ID;

  footerDiv.innerHTML = createFooterElements();
  userInterace.after(footerDiv);
}
