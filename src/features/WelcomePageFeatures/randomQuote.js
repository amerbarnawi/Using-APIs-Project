"use strict";

import { fetchData } from "../../fetchData/fetchData.js";

//This function is to chose a random quote from random page ( This API has thousand of quotes).

export async function generateRandomQuote(jsonQuoteData) {
  const randomPage =
    Math.floor(Math.random() * jsonQuoteData.pagination.totalPages) + 1;
  const randomNumber = Math.floor(Math.random() * jsonQuoteData.data.length);

  const url = `https://quote-garden.herokuapp.com/api/v3/quotes?page=${randomPage}`;

  const randomPageData = await fetchData(url);

  const randomQuote = randomPageData.data[randomNumber];

  return randomQuote;
}
