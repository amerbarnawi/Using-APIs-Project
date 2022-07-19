"use strict";

import {
  NASA_DIV_ID,
  QUOTE_DIV_ID,
  QUOTE_FACT_DIV_ID,
  FACT_DIV_ID,
  WELCOME_PG_ID,
} from "../constant.js";

export function createWelcomeElements() {
  const welcomeElements = document.createElement("div");
  welcomeElements.id = WELCOME_PG_ID;

  welcomeElements.innerHTML = String.raw`
    <h2>Welcome to the library.</h2>

    <div id=${NASA_DIV_ID}></div>

    <div id=${QUOTE_FACT_DIV_ID}>
      <div id=${QUOTE_DIV_ID}></div>
      <div id="${FACT_DIV_ID}"></div>
    </div>
    `;

  return welcomeElements;
}
