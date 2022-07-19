"use strict";

import {
  SEARCH_BUTTON_ID,
  SEARCH_INPUT_ID,
  USER_INTERFACE_ID,
} from "../constant.js";
import { search } from "../features/libraryFeatures/searchFunction.js";
import { createLibrarySearchElements } from "../views/searchView.js";
import { libraryData } from "../data.js";
import { refreshSessionStorage } from "../storage.js";

export async function initSearchPage() {
  // Data for the storage.
  libraryData.currentPage.searchPage = true;
  libraryData.currentPage.bookDetailsPage = false;
  refreshSessionStorage();

  // initSearchPage.
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = "";

  createLibrarySearchElements();

  const searchButton = document.getElementById(SEARCH_BUTTON_ID);
  const searchInput = document.getElementById(SEARCH_INPUT_ID);

  searchButton.addEventListener("click", (event) => {
    // When search function is run, it will call this function: renderResultsCards.
    event.preventDefault();
    search(searchInput.value);
    searchInput.value = "";
  });

  searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      searchButton.click();
    }
  });
}
