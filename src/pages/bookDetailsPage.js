"use strict";

import {
  BK_COVERS_ID,
  BUTTON_BACK_TO_SEARCH_ID,
  USER_INTERFACE_ID,
} from "../constant.js";
import { fetchData } from "../fetchData/fetchData.js";
import { createBookDetailsElement } from "../views/bookDetailsView.js";
import { initSearchPage } from "./searchPage.js";
import { libraryData } from "../data.js";
import { refreshSessionStorage } from "../storage.js";
import { renderBkCovers } from "../features/libraryFeatures/bookCovers.js";
import { renderMessage } from "../features/libraryFeatures/libraryMessage.js";
import { search } from "../features/libraryFeatures/searchFunction.js";

let bookDescription = "";

export async function initBookDetails(key, title, author, src, searchValue) {
  // Data for the storage.
  libraryData.currentPage.searchPage = false;
  libraryData.currentPage.bookDetailsPage = true;

  try {
    const url = `http://openlibrary.org${key}.json`;
    const jsonBookDetails = await fetchData(url);

    if (jsonBookDetails.description) {
      getDescription(jsonBookDetails);
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

    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = "";
    userInterface.appendChild(bookDetailsElement);

    if (jsonBookDetails.covers) {
      renderBkCovers(jsonBookDetails.covers);
    } else {
      const ulCovers = document.getElementById(BK_COVERS_ID);
      ulCovers.innerHTML = "<h4>There are no covers.</h4>";
    }

    const backButton = document.getElementById(BUTTON_BACK_TO_SEARCH_ID);
    backButton.addEventListener("click", () => {
      initSearchPage();
      search(searchValue);
    });
    refreshSessionStorage();
  } catch (error) {
    renderMessage(`Sorry, something went wrong (${error.message})`);
  }
}

function getDescription(jsonBookDetails) {
  if (typeof jsonBookDetails.description !== "string") {
    bookDescription = jsonBookDetails.description.value;
    console.log("object");
  } else if (typeof jsonBookDetails.description === "string") {
    bookDescription = jsonBookDetails.description;
  }
}
