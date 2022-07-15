"use strict";

import { SEARCH_INPUT_ID, SEARCH_RESULTS_ID } from "../../constant.js";
import { fetchData } from "../../fetchData/fetchDataFunctions.js";
import { messageFromLibrary } from "./libraryMessage.js";
import { renderResultsCards } from "./renderSearchResults.js";

export async function search() {
  const searchInput = document.getElementById(SEARCH_INPUT_ID);
  const resultsElements = document.getElementById(SEARCH_RESULTS_ID);

  messageFromLibrary("Please wait, books are loading..", resultsElements);

  const url = `http://openlibrary.org/search.json?q=${searchInput.value}`;

  try {
    const jsonSearchResults = await fetchData(url);

    if (jsonSearchResults.docs.length > 0) {
      // In case there is results.
      const numberFound = jsonSearchResults.numFound;
      messageFromLibrary(
        `You search for (${searchInput.value}), I found (${numberFound}) result!`,
        resultsElements
      );

      renderResultsCards(jsonSearchResults, resultsElements);
    } else {
      // In case there is no results.
      messageFromLibrary("Sorry, Can not find results!", resultsElements);
    }
  } catch (error) {
    (error) => {
      console.log("Iam");
    };
    //   messageFromLibrary(
    //     `Sorry, Something went wrong (${error})`,
    //     resultsElements
    //   );
  }
}
