"use strict";

import {
  LIBRARY_MESSAGE_ID,
  SEARCH_BUTTON_ID,
  SEARCH_INPUT_ID,
  SEARCH_RESULTS_ID,
  SEARCH_RESULT_CARD_ID,
  USER_INTERFACE_ID,
} from "../constant.js";

export function createlibrarySearchElements() {
  const elements = document.getElementById(USER_INTERFACE_ID);
  elements.innerHTML = String.raw`

            <h1>Welcome to the library</h1>
            <form>
                <lable>You can search about what ever you want:</lable>
                <input type="text" placeholder="Your search text" id="${SEARCH_INPUT_ID}">
            </form> 
            <button id="${SEARCH_BUTTON_ID}">SEARCH</button>
            <div id = "${LIBRARY_MESSAGE_ID}"></div>
            <div id=${SEARCH_RESULTS_ID}></div>
    `;
  return elements;
}

export function createSearchResultCard(src, bookName, authorName, key) {
  const resultCardDiv = document.createElement("div");
  resultCardDiv.setAttribute("key", key);
  resultCardDiv.id = SEARCH_RESULT_CARD_ID;

  resultCardDiv.innerHTML = String.raw`

            <img src="${src}" alt="Book cover">
            <h2>${bookName}</h2>
            <p>${authorName}</p>
    `;

  return resultCardDiv;
}
