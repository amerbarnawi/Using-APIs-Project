"use strict";

import {
  LIBRARY_MESSAGE_ID,
  SEARCH_BUTTON_ID,
  SEARCH_CONTAINER_ID,
  SEARCH_INPUT_ID,
  SEARCH_RESULTS_ID,
  SEARCH_RESULT_CARD_CLASS,
  STATUE_ID,
  USER_INTERFACE_ID,
} from "../constant.js";

export function createLibrarySearchElements() {
  const elements = document.getElementById(USER_INTERFACE_ID);
  elements.innerHTML = String.raw`

    <form>
      <div>
        <label>Searching about: </label>
        <input type="text" placeholder="Your search text" id="${SEARCH_INPUT_ID}">
        <button id="${SEARCH_BUTTON_ID}">SEARCH</button>
      </div>
        <div id = "${LIBRARY_MESSAGE_ID}"></div>
    </form> 

    <div id = "${SEARCH_CONTAINER_ID}">
      <div id="${STATUE_ID}">
        <h3>"Read even if you drown!"</h3>
        <p>Image of a statue in Finland, titled<br>"Read even if you drown!"</p>
        <p>Reading the secret of the progress of nations and progress of people.</p>
        <img src="./public/assets/readImage.jpeg" alt = "Image of a statue in Finland">
      </div>     
      <div id=${SEARCH_RESULTS_ID}>Search results cards.</div>
    </div>
    
    `;
  return elements;
}

export function createSearchResultCard(src, bookName, authorName, key) {
  const resultCardDiv = document.createElement("div");
  resultCardDiv.setAttribute("key", key);
  resultCardDiv.className = SEARCH_RESULT_CARD_CLASS;

  resultCardDiv.innerHTML = String.raw`

    <img src="${src}" alt="Book cover">
    <div>
      <h4>Book title: ${bookName}</h4>
      <p>The author: ${authorName}</p>
    </div>
    `;

  return resultCardDiv;
}
