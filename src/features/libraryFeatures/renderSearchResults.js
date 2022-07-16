import { createSearchResultCard } from "../../views/librarySearchView.js";
import { initBookDetails } from "../../pages/bookDetailsPage.js";

export function renderResultsCards(jsonSearchResults, resultsElements) {
  jsonSearchResults.docs.forEach((book) => {
    const bookTitle = book.title;
    const authorName = book.author_name;
    const bookKey = book.key;
    let photoSrc = "https://";

    if (book.cover_i) {
      photoSrc = `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;
    }

    const searchResultCard = createSearchResultCard(
      photoSrc,
      bookTitle,
      authorName,
      bookKey
    );
    resultsElements.appendChild(searchResultCard);

    searchResultCard.addEventListener("click", async () => {
      await initBookDetails(bookKey, bookTitle, authorName, photoSrc);
    });
  });
}
