"use strict";

import { createSearchResultCard } from "../../views/librarySearchView.js";
import { initBookDetails } from "../../pages/bookDetailsPage.js";

export function renderResultsCards(jsonSearchResults, resultsElement) {
  jsonSearchResults.docs.forEach((book) => {
    const bookTitle = book.title;
    const authorName = book.author_name;
    const bookKey = book.key;
    let imgSrc = "../public/assets/empty_book_cover.jpeg";

    if (book.cover_i) {
      imgSrc = `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;
    }

    const searchResultCard = createSearchResultCard(
      imgSrc,
      bookTitle,
      authorName,
      bookKey
    );
    resultsElement.appendChild(searchResultCard);

    searchResultCard.addEventListener("click", async () => {
      await initBookDetails(bookKey, bookTitle, authorName, imgSrc);
    });
  });
}
