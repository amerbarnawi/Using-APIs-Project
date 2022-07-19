"use strict";

import { libraryData } from "./data.js";
import { initBookDetails } from "./pages/bookDetailsPage.js";
import { initSearchPage } from "./pages/searchPage.js";
import { initWelcomePage } from "./pages/welcomePage.js";

export function refreshSessionStorage() {
  window.sessionStorage.storageBookData = JSON.stringify(libraryData);
}

export function updateFromStorageData() {
  const myStorageData = JSON.parse(sessionStorage.storageBookData);

  if (myStorageData.currentPage.searchPage === true) {
    initSearchPage();
  } else if (myStorageData.currentPage.bookDetailsPage === true) {
    initBookDetails(
      myStorageData.bookDetailsPage.key,
      myStorageData.bookDetailsPage.title,
      myStorageData.bookDetailsPage.author,
      myStorageData.bookDetailsPage.imgSrc
    );
  } else {
    initWelcomePage();
  }
}
