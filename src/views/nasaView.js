"use strict";

import {
  NASA_DESCRIPTION_ID,
  NASA_DIV_ID,
  NASA_PICTURE_ID,
} from "../constant.js";

export function createNasaElement() {
  const nasaElement = document.getElementById(NASA_DIV_ID);
  nasaElement.innerHTML = String.raw`
      <div>
          <img id=${NASA_PICTURE_ID} src='https://' alt='Picture Of The Day from NASA.'>
      </div>
      <div>
          <h2>Picture of the day ( NASA ): </h2>
          <p id=${NASA_DESCRIPTION_ID}>Please wait for The NASA photo Description ..</p>
      </div>
    `;
}
