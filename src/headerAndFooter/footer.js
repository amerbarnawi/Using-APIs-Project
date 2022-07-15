import { USER_INTERFACE_ID } from "../constant.js";

export function initFooter() {
  const userInterace = document.getElementById(USER_INTERFACE_ID);
  const footerDiv = document.createElement("div");

  footerDiv.innerHTML = createFooterElements();
  userInterace.after(footerDiv);
}

function createFooterElements() {
  const footerElements = String.raw`
    
        <h1>The footer</h1>
        <img src="http://" alt="logo image">
    `;

  return footerElements;
}
