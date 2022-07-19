"use strict";

import { QUOTE_AUTHOR_ID, QUOTE_ID, QUOTE_URL } from "../constant.js";
import { genaratRandomQuote } from "../features/WelcomePageFeatures/randomQuote.js";
import { fetchData } from "../fetchData/fetchData.js";
import { createQuoteElement } from "../views/quoteView.js";

export async function renderQuoteData() {
  createQuoteElement();

  const quoteText = document.getElementById(QUOTE_ID);

  try {
    const jsonQuoteData = await fetchData(QUOTE_URL);
    const randomQuote = await genaratRandomQuote(jsonQuoteData);

    quoteText.textContent = randomQuote.quoteText;

    if (randomQuote.quoteAuthor) {
      const quoteAuthor = document.getElementById(QUOTE_AUTHOR_ID);
      quoteAuthor.textContent = randomQuote.quoteAuthor;
    }
  } catch (error) {
    quoteText.textContent = `Sorry, something went wrong (${error.message})`;
  }
}
