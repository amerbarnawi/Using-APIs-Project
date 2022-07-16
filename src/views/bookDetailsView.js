import { BK_COVERS_ID, BUTTON_BACK_TO_SEARCH_ID } from "../constant.js";

export function createBookDetailsElement(bookTitle, author, src, description) {
  const element = document.createElement("div");

  element.innerHTML = String.raw`

        <h2>${bookTitle}</h2>
        <p>${author}</p>
        <img src=${src} alt="Book Photo">
        <p>${description}<p>
        <div>
            <p>Book Covers</p>
            <ul id = "${BK_COVERS_ID}"></ul>
        </div>
        <button id = "${BUTTON_BACK_TO_SEARCH_ID}">BACK</button>
    `;

  return element;
}
