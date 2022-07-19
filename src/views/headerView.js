"use strict";

import {
  APP_INFO_ID,
  BUTTON_BACK_TO_WELCOME_ID,
  OPEN_LIBRARY_BUTTON_ID,
} from "../constant.js";

export function createHeaderElements() {
  const headerElements = String.raw`
      
      <h2>OPEN<br>YOUR<br>MIND</h2>
      <h1>LIBRARY <br><span>OPEN YOUR MIND</span> </h1>
      <div>
        <button id = "${APP_INFO_ID}">APP INFO</button>
        <button id = "${BUTTON_BACK_TO_WELCOME_ID}">To Welcome</button>
        <button id=${OPEN_LIBRARY_BUTTON_ID}>Book search</button>
      </div>
      `;

  return headerElements;
}
