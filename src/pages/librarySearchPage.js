"use strict";

import {
  SEARCH_BUTTON_ID,
  SEARCH_INPUT_ID,
  USER_INTERFACE_ID,
} from "../constant.js";
import { search } from "../features/libraryFeatures/searchFunction.js";
import { createlibrarySearchElements } from "../views/librarySearchView.js";

export async function initSearchPage() {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = "";

  createlibrarySearchElements();

  const searchButton = document.getElementById(SEARCH_BUTTON_ID);
  const searchInput = document.getElementById(SEARCH_INPUT_ID);
  document.searchButton = function (event) {
    event.preventDefault();
  };

  searchButton.addEventListener("click", async () => {
    await search();
    searchInput.value = "";
  });

  searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      searchButton.click();
    }
  });

  searchInput.addEventListener("focus", () => {});
}
