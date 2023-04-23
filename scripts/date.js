
const today = new Date();
const year = today.getFullYear();
const msg = `&copy;  ${year} | Kevin J. Mendoza | Rexburg, ID <br/>
<b>Last Updated: </b>${document.lastModified}`;

const el = document.querySelector("footer");
el.innerHTML = msg;
