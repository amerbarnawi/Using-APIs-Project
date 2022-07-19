"use strict";

import { SEARCH_INPUT_ID, SEARCH_RESULTS_ID } from "../../constant.js";

import { fetchData } from "../../fetchData/fetchData.js";
import { hideStatueBlock } from "../cssSuport/mediaQuery.js";
import { renderMessage } from "./libraryMessage.js";
import { renderResultsCards } from "./searchResults.js";

export async function search() {
  const searchInput = document.getElementById(SEARCH_INPUT_ID);
  const resultsElement = document.getElementById(SEARCH_RESULTS_ID);

  renderMessage("Please wait, books are loading..");

  const url = `http://openlibrary.org/search.json?q=${searchInput.value}`;

  if (searchInput.value !== "") {
    try {
      const jsonSearchResults = await fetchData(url);

      if (jsonSearchResults.docs.length > 0) {
        // In case there is results.
        const numberFound = jsonSearchResults.numFound;
        renderMessage(
          `You search for (${searchInput.value}), I found (${numberFound}) result!`
        );

        // I hide the statue block (mobile).
        const mediaQueryList = window.matchMedia("(max-width: 600px)");
        hideStatueBlock(mediaQueryList);
        mediaQueryList.addListener(hideStatueBlock);

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
