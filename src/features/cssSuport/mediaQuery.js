"use strict";

import { STATUE_ID } from "../../constant.js";

export function hideStatueBlock(mediaQueryList) {
  const statueBlock = document.getElementById(STATUE_ID);

  if (mediaQueryList.matches) {
    statueBlock.style.display = "none";
  } else {
    statueBlock.style.display = "block";
  }
}
