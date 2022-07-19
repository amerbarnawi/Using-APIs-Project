"use strict";

import { BK_COVERS_ID } from "../../constant.js";

export function renderBkCovers(imagesIdArray) {
  const imagesUl = document.getElementById(BK_COVERS_ID);

  imagesIdArray.forEach((id) => {
    const imgLi = document.createElement("li");
    const cover = document.createElement("img");
    cover.src = `https://covers.openlibrary.org/b/id/${id}-L.jpg`;
    cover.alt = "Cover Image";
    imgLi.appendChild(cover);
    imagesUl.appendChild(imgLi);
  });
}
