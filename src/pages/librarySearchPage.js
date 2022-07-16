"use strict";

import {
  SEARCH_BUTTON_ID,
  SEARCH_INPUT_ID,
  USER_INTERFACE_ID,
} from "../constant.js";
import { search } from "../features/libraryFeatures/searchFunction.js";
import { createlibrarySearchElements } from "../views/librarySearchView.js";
import { libraryData } from "../data.js";
import { refreshSessionStorage } from "../storage.js";

export async function initSearchPage() {
  // Data for the storage.
  libraryData.currentPage.searchPage = true;
  console.log(libraryData.currentPage.searchPage);
  libraryData.currentPage.bookDetailsPage = false;
  refreshSessionStorage();

  // initSearchPage.
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = "";

  createlibrarySearchElements();

  const searchButton = document.getElementById(SEARCH_BUTTON_ID);
  const searchInput = document.getElementById(SEARCH_INPUT_ID);
  document.searchButton = function (event) {
    event.preventDefault();
  };

  searchButton.addEventListener("click", async () => {
    // When search function is run, it will call this function: renderResultsCards.
    await search();
    searchInput.value = "";
  });

  searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      searchButton.click();
    }
  });
}
