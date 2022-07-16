"use strict";

export async function fetchData(url) {
  const response = await fetch(url);
  if (response.ok) {
    const jsonData = await response.json();
    return jsonData;
  }
}
