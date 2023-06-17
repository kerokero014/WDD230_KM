const url = "https://kerokero014.github.io/WDD230_KM/chambers/scripts/data.json";

async function getCompaniesData() {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.stores);
  displayStore(data.stores);
}

getCompaniesData();

const displayStore = (stores) => {
  const cards = document.querySelector("div#cards");

  stores.forEach((store) => {
    let card = document.createElement("section");
    let logourl = document.createElement("img");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let weburl = document.createElement("a");
    let h2 = document.createElement("h2");

    h2.textContent = `${store.companyName}`;
    address.textContent = `${store.compLocation}`;
    phone.textContent = `${store.phone}`;
    weburl.textContent = `${store.weburl}`;

    logourl.setAttribute("src", store.logourl);
    logourl.setAttribute("alt", `${store.companyName} logo`);
    logourl.setAttribute("loading", "lazy");

    
    card.appendChild(logourl);
    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(phone);

    cards.appendChild(card);
  });
};

const gridbutton = document.querySelector("#grid-button");
const listbutton = document.querySelector("#list-button");
const display = document.querySelector("#cards");

gridbutton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
  display.classList.add("list");
  display.classList.remove("grid");
});
