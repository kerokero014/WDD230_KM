const url = "scripts/data.json";

async function getCompaniesData() {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.stores);
  displayStores(data.stores);
}
function displayStores(stores) {
  const cards = document.querySelector("div#cards");

  stores.forEach((stores) => {
    let card = document.createElement("section");
    let logourl = document.createElement("img");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let companyName = document.createElement("h2");

    address.textContent = `${stores.compLocation}`;
    phone.textContent = `${stores.phone}`;
    companyName.innerHTML = `<strong>${stores.companyName}</strong>`;

    img.setAttribute("src", stores.logourl);
    logourl.setAttribute("alt", `Company logo of ${stores.name}`);

    card.appendChild(image);
    card.appendChild(companyName);
    card.appendChild(compLocation);
    card.appendChild(phone);

    cards.appendChild(card);
  });
}
getCompaniesData();

const gridbutton = document.querySelector("#grid-button");
const listbutton = document.querySelector("#list-button");
const display = document.querySelector("#company-cards");

gridbutton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
  display.classList.add("list");
  display.classList.remove("grid");
});
