"use strict";

export async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const jsonData = await response.json();
      return jsonData;
    }
  } catch (error) {
    console.log(`Something went wrong (${error})`);
  }
}
