import {
  BK_COVERS_DIV_ID,
  BK_COVERS_ID,
  BK_DESCRIP_DIV_ID,
  BK_TITLE_DIV_ID,
  BUTTON_BACK_TO_SEARCH_ID,
} from "../constant.js";

export function createBookDetailsElement(bookTitle, author, src, description) {
  const element = document.createElement("div");

  element.innerHTML = String.raw`

        <div id="${BK_TITLE_DIV_ID}"> 
            <h1>${bookTitle}</h1>
            <p>The authors: ${author}</p>
        </div>
        <div id="${BK_DESCRIP_DIV_ID}"> 
            <h2>About the book:</h2>
            <div>
                <img src=${src} alt="Book Photo">
                <p>${description}<p>
            </div>    
        </div>
        <div id = "${BK_COVERS_DIV_ID}"> 
            <p>Book Covers:</p>
            <ul id = "${BK_COVERS_ID}"></ul>
        </div>
        <button id = "${BUTTON_BACK_TO_SEARCH_ID}">BACK</button>
    `;

  return element;
}
