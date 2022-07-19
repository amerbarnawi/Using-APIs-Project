"use strict";

import { FACT_DIV_ID, FUN_FACT_ID } from "../constant.js";

export function createFunFactElement() {
  const funFactElement = document.getElementById(FACT_DIV_ID);
  funFactElement.innerHTML = String.raw`
  
  <h2>Fun fact:</h2>
  <p id=${FUN_FACT_ID}>Please wait for a Fun fact ..</p>
  `;
}
