import { fetchData } from "../../fetchData/fetchDataFunctions.js";
import { QUOTE_URL, QUOTE_ID, QUOTE_AUTHOR_ID } from "../../constant.js";

export async function renderQuoteData() {
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
    quoteText.textContent = `Sorry, something went wrong (${error})`;
  }
}

async function genaratRandomQuote(jsonQuoteData) {
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
