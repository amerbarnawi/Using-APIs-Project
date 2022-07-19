"use strict";

import { STATUE_ID } from "../../constant.js";
import { libraryData } from "../../data.js";

export function hideStatueBlock(mediaQueryList) {
  if (libraryData.currentPage.searchPage) {
    const statueBlock = document.getElementById(STATUE_ID);

    if (mediaQueryList.matches) {
      statueBlock.style.display = "none";
    } else {
      statueBlock.style.display = "block";
    }
  }
}
