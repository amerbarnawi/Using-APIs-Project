"use strict";

import {
  NASA_DESCRIPTION_ID,
  NASA_PICTURE_ID,
  NASA_PICTURE_URL,
} from "../constant.js";
import { fetchData } from "../fetchData/fetchData.js";
import { createNasaElement } from "../views/nasaView.js";

export async function renderNasaData() {
  createNasaElement();

  const nasaPicture = document.getElementById(NASA_PICTURE_ID);
  const nasaDescription = document.getElementById(NASA_DESCRIPTION_ID);

  try {
    const jsonNasaData = await fetchData(NASA_PICTURE_URL);
    nasaPicture.src = jsonNasaData.url;
    nasaDescription.textContent = jsonNasaData.explanation;
  } catch (error) {
    nasaDescription.textContent = `Sorry, something went wrong (${error.message})`;
    nasaPicture.alt = `Sorry, something went wrong (${error.message})`;
  }
}
