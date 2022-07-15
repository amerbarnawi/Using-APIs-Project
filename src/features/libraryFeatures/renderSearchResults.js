import { createSearchResultCard } from "../../views/librarySearchView.js";

export function renderResultsCards(jsonSearchResults, resultsElements) {
  jsonSearchResults.docs.forEach((book) => {
    const bookTitle = book.title;
    const authorName = book.author_name;
    let photoSrc = "https://";

    if (book.cover_i) {
      photoSrc = `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;
    }

    const searchResultCard = createSearchResultCard(
      photoSrc,
      bookTitle,
      authorName
    );

    resultsElements.appendChild(searchResultCard);
  });
}
