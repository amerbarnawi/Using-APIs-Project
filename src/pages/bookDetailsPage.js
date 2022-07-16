import { BUTTON_BACK_TO_SEARCH_ID, USER_INTERFACE_ID } from "../constant.js";
import { fetchData } from "../fetchData/fetchDataFunctions.js";
import { createBookDetailsElement } from "../views/bookDetailsView.js";
import { initSearchPage } from "./librarySearchPage.js";

export async function initBookDetails(key, title, author, src) {
  const url = `http://openlibrary.org${key}.json`;
  const jsonBookDetails = await fetchData(url);

  let bookDescription = "";
  if (jsonBookDetails.description) {
    if (typeof jsonBookDetails.description !== "string") {
      bookDescription = jsonBookDetails.description.value;
    } else if (typeof jsonBookDetails.description === "string") {
      bookDescription = jsonBookDetails.description;
    }
  } else {
    bookDescription = "There is no description for this book.";
  }

  const bookDetailsElement = createBookDetailsElement(
    title,
    author,
    src,
    bookDescription
  );

  console.log(title);
  console.log(author);
  console.log(src);
  console.log(bookDescription);
  console.log(bookDetailsElement);
  console.log(typeof jsonBookDetails.description);

  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = "";
  userInterface.appendChild(bookDetailsElement);

  const backButton = document.getElementById(BUTTON_BACK_TO_SEARCH_ID);
  backButton.addEventListener("click", () => {
    initSearchPage();
  });
}
