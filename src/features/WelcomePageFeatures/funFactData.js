"use strict";

import { fetchData } from "../../fetchData/fetchDataFunctions.js";
import { FUN_FACT_ID, FUN_FACT_URL } from "../../constant.js";

export async function renderFunFactData() {
  const funFactText = document.getElementById(FUN_FACT_ID);

  try {
    const jsonFunFactData = await fetchData(FUN_FACT_URL);
    funFactText.textContent = jsonFunFactData.data.fact;
  } catch (error) {
    funFactText.textContent = `Something went wrong (${error})`;
  }
}
