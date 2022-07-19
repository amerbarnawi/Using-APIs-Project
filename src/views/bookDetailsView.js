"use strict";

import {
  BK_COVERS_DIV_ID,
  BK_COVERS_ID,
  BK_DESCRIP_DIV_ID,
  BK_TITLE_DIV_ID,
  BOOK_DETAILS_CONTAINER_ID,
  BUTTON_BACK_TO_SEARCH_ID,
} from "../constant.js";

export function createBookDetailsElement(bookTitle, author, src, description) {
  const element = document.createElement("div");
  element.id = BOOK_DETAILS_CONTAINER_ID;

  element.innerHTML = String.raw`

        <div id="${BK_DESCRIP_DIV_ID}"> 
          <div><img src=${src} alt="Book Photo"></div>
          <div id="${BK_TITLE_DIV_ID}"> 
            <h1>${bookTitle}</h1>
            <p><span>The authors:</span> ${author}</p>
          </div>
          
          <div>
            <h2>About the book:</h2>
            <p>${description}<p>
          </div>    
        </div>

        <div id = "${BK_COVERS_DIV_ID}"> 
            <h2>Book Covers:</h2>
            <ul id = "${BK_COVERS_ID}"></ul>
        </div>
        <button id = "${BUTTON_BACK_TO_SEARCH_ID}">BACK</button>
    `;

  return element;
}
