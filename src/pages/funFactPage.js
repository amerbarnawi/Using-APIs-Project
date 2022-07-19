"use strict";

import { FUN_FACT_ID, FUN_FACT_URL } from "../constant.js";
import { fetchData } from "../fetchData/fetchData.js";
import { createFunFactElement } from "../views/funFactView.js";

export async function renderFunFactData() {
  createFunFactElement();
  const funFactText = document.getElementById(FUN_FACT_ID);

  try {
    const jsonFunFactData = await fetchData(FUN_FACT_URL);
    funFactText.textContent = jsonFunFactData.data.fact;
  } catch (error) {
    funFactText.textContent = `Something went wrong (${error.message})`;
  }
}
