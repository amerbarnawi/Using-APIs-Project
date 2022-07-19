"use strict";

import { QUOTE_AUTHOR_ID, QUOTE_DIV_ID, QUOTE_ID } from "../constant.js";

export function createQuoteElement() {
  const quoteElement = document.getElementById(QUOTE_DIV_ID);
  quoteElement.innerHTML = String.raw`
  
  <h2>Quote:</h2>
  <p id=${QUOTE_ID}>Please wait for a Random Quote ..</p>
  <p id=${QUOTE_AUTHOR_ID}>THE AUTHOR</p> 
  `;
}
