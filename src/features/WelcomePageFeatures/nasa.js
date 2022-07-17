"use strict";

import { fetchData } from "../../fetchData/fetchDataFunctions.js";
import {
  NASA_PICTURE_URL,
  NASA_PICTURE_ID,
  NASA_DESCRIPTION_ID,
} from "../../constant.js";

export async function renderNasaData() {
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
