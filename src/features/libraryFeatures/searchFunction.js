"use strict";

import { SEARCH_RESULTS_ID } from "../../constant.js";
import { fetchData } from "../../fetchData/fetchData.js";
import { hideStatueBlock } from "../cssSupport/mediaQuery.js";
import { renderMessage } from "./libraryMessage.js";
import { renderResultsCards } from "./searchResults.js";

export async function search(value) {
  const resultsElement = document.getElementById(SEARCH_RESULTS_ID);
  resultsElement.innerHTML = "";

  renderMessage("Please wait, books are loading..");

  const url = `http://openlibrary.org/search.json?q=${value}`;

  if (value !== "") {
    try {
      const jsonSearchResults = await fetchData(url);

      if (jsonSearchResults.docs.length > 0) {
        // In case there is results.
        const numberFound = jsonSearchResults.numFound;
        renderMessage(
          `You search for (${value}), I found (${numberFound}) result!`
        );

        // I hide the statue block (mobile).
        // This will happen only when the application have results to show.
        // Or, I can add attribute here and style it by CSS ( display : 'none').
        const mediaQueryList = window.matchMedia("(max-width: 600px)");
        hideStatueBlock(mediaQueryList);
        mediaQueryList.addEventListener("change", hideStatueBlock);

        // Rendering the results cards.
        resultsElement.innerHTML = "";
        renderResultsCards(jsonSearchResults, resultsElement);
      } else {
        // In case there is no results.
        renderMessage("Sorry, Can not find results!");
      }
    } catch (error) {
      renderMessage(`Sorry, Something went wrong (${error.message})`);
    }
  } else {
    // In case the user did not write any thing to search for.
    renderMessage("Please, write something to search!");
  }
}
