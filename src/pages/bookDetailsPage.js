import {
  BK_COVERS_ID,
  BUTTON_BACK_TO_SEARCH_ID,
  USER_INTERFACE_ID,
} from "../constant.js";
import { fetchData } from "../fetchData/fetchData.js";
import { createBookDetailsElement } from "../views/bookDetailsView.js";
import { initSearchPage } from "./librarySearchPage.js";
import { libraryData } from "../data.js";
import { refreshSessionStorage } from "../storage.js";
import { renderBkCovers } from "../features/libraryFeatures/bookCovers.js";
import { renderMessage } from "../features/libraryFeatures/libraryMessage.js";

export async function initBookDetails(key, title, author, src) {
  // Data for the storage.
  libraryData.currentPage.searchPage = false;
  libraryData.currentPage.bookDetailsPage = true;

  try {
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

    // Data for the storage.
    libraryData.bookDetailsPage.author = author;
    libraryData.bookDetailsPage.title = title;
    libraryData.bookDetailsPage.imgSrc = src;
    libraryData.bookDetailsPage.key = key;

    console.log(title);
    console.log(author);
    console.log(src);
    console.log(bookDescription);
    console.log(bookDetailsElement);
    console.log(typeof jsonBookDetails.description);

    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = "";
    userInterface.appendChild(bookDetailsElement);

    if (jsonBookDetails.covers) {
      renderBkCovers(jsonBookDetails.covers);
    } else {
      const ulCovers = document.getElementById(BK_COVERS_ID);
      ulCovers.innerHTML = "<h4>There is no covers.</h4>";
    }

    const backButton = document.getElementById(BUTTON_BACK_TO_SEARCH_ID);
    backButton.addEventListener("click", () => {
      initSearchPage();
    });
    refreshSessionStorage();
  } catch (error) {
    renderMessage(`Sorry, something went wrong (${error.message})`);
  }
}
