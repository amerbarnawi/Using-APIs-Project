"use strict";

import { fetchData } from "../../fetchData/fetchData.js";

export async function genaratRandomQuote(jsonQuoteData) {
  const randomPage =
    Math.floor(Math.random() * jsonQuoteData.pagination.totalPages) + 1;
  const randomNumber = Math.floor(Math.random() * jsonQuoteData.data.length);

  //   console.log(randomPage);
  //   console.log(randomNumber);
  //   console.log(typeof jsonQuoteData.pagination.totalPages);

  const url = `https://quote-garden.herokuapp.com/api/v3/quotes?page=${randomPage}`;

  const randomPageData = await fetchData(url);

  const randomQuote = randomPageData.data[randomNumber];

  return randomQuote;
}
