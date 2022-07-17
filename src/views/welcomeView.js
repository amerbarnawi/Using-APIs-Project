"use strict";

import {
  OPEN_LIBRARY_BUTTON_ID,
  NASA_PICTURE_ID,
  NASA_DIV_ID,
  NASA_DESCRIPTION_ID,
  QUOTE_ID,
  QUOTE_DIV_ID,
  QUOTE_AUTHOR_ID,
  FUN_FACT_ID,
  QUOTE_FACT_DIV_ID,
  FACT_DIV_ID,
} from "../constant.js";

export function createWelcomeElements() {
  const welcomeElements = document.createElement("div");

  welcomeElements.innerHTML = String.raw`
    <h1>Welcome to my app</h1>

    <div id=${NASA_DIV_ID}>
      <img id=${NASA_PICTURE_ID} src='https://' alt='Picture Of The Day from NASA.'>
      <p id=${NASA_DESCRIPTION_ID}>Please wait for The NASA photo Description ..</p>
    </div>

    <div id=${QUOTE_FACT_DIV_ID}>
      <div id=${QUOTE_DIV_ID}>
        <h2>Quote:</h2>
        <p id=${QUOTE_ID}>Please wait for a Random Quote ..</p>
        <p id=${QUOTE_AUTHOR_ID}>THE AUTHOR</p>
      </div>

      <div id="${FACT_DIV_ID}">
        <h2>Fun fact:</h2>
        <p id=${FUN_FACT_ID}>Please wait for a Fun fact ..</p>
      </div>
    </div>

    <button id=${OPEN_LIBRARY_BUTTON_ID}>Go to the library</button>
    `;

  return welcomeElements;
}
