import { SEARCH_RESULTS_ID, STATUE_ID } from "../constant.js";

export function hideStatueBlock(mediaQueryList) {
  const statueBlock = document.getElementById(STATUE_ID);
  const resultsCardsBlock = document.getElementById(SEARCH_RESULTS_ID);

  if (mediaQueryList.matches) {
    statueBlock.style.display = "none";
    resultsCardsBlock.style.height = "100px";
  } else {
    statueBlock.style.display = "block";
  }
}
