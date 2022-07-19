"use strict";

import { libraryData } from "./data.js";
import { initBookDetails } from "./pages/bookDetailsPage.js";
import { initSearchPage } from "./pages/librarySearchPage.js";
import { initWelcomePage } from "./pages/welcomePage.js";

export function refreshSessionStorage() {
  window.sessionStorage.strgBkData = JSON.stringify(libraryData);
  console.log(libraryData);
}

export function updateFromStorageData() {
  const myStorageData = JSON.parse(sessionStorage.strgBkData);

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
