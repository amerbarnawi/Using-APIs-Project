import { FOOTER_ID, USER_INTERFACE_ID } from "../constant.js";

export function initFooter() {
  const userInterace = document.getElementById(USER_INTERFACE_ID);
  const footerDiv = document.createElement("div");
  footerDiv.id = FOOTER_ID;

  footerDiv.innerHTML = createFooterElements();
  userInterace.after(footerDiv);
}

function createFooterElements() {
  const footerElements = String.raw`
    
      <p>Open your mind Library</p>
      <h6>@Amer Barnawi</h6>
    `;

  return footerElements;
}
