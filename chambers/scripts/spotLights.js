async function getCompaniesData() {
    const spotlightUrl =
        "https://kerokero014.github.io/WDD230_KM/chambers/scripts/data.json";

    try {
        const response = await fetch(spotlightUrl);
        const data = await response.json();
        displaySpotlights(data.stores);
        displayMembers(data.member);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

function displaySpotlights(stores) {
    const spotlights = document.querySelector("#spotlights");

    const samComp = [0, 2, 5];
    const christineComp = [3, 6, 7];
    const joseComp = [1, 4, 8];

    function getRandomItem(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const item = arr[randomIndex];
        return item;
    }

    let samRandomComp = getRandomItem(samComp);
    let christineRandomComp = getRandomItem(christineComp);
    let joseRandomComp = getRandomItem(joseComp);

    console.log(samRandomComp);
    console.log(christineRandomComp);
    console.log(joseRandomComp);

    const compIndex = [];
    compIndex.push(samRandomComp, christineRandomComp, joseRandomComp);

    console.log(compIndex);

    compIndex.forEach((number) => {
        let div = document.createElement("div");
        let companyName = document.createElement("h2");
        let logo = document.createElement("img");
        let contactDetails = document.createElement("div");
        let phoneNum = document.createElement("p");
        let link = document.createElement("a");

        companyName.textContent = `${stores[number].companyName}`;
        phoneNum.textContent = `${stores[number].phone}`;
        link.textContent = ` ${stores[number].weburl}`;

        div.setAttribute("class", "spotlight");
        logo.setAttribute("src", stores[number].logourl);
        logo.setAttribute("alt", `Company logo of ${stores[number].companyName}`);

        contactDetails.setAttribute("class", "spots-contact-details");
        link.setAttribute("href", stores[number].weburl);
        link.setAttribute("target", "blank");

        contactDetails.appendChild(phoneNum);
        contactDetails.appendChild(link);

        div.appendChild(companyName);
        div.appendChild(logo);
        div.appendChild(contactDetails);

        spotlights.appendChild(div);
    });
}

function displayMembers(members) {
    let spotlight1 = document.querySelector(".spotlight:first-child");
    let spotlight2 = document.querySelector(".spotlight:nth-child(2)");
    let spotlight3 = document.querySelector(".spotlight:nth-child(3)");

    spotlight1.setAttribute("id", "spotlight1");
    spotlight2.setAttribute("id", "spotlight2");
    spotlight3.setAttribute("id", "spotlight3");

    let firstSpot = document.createElement("p");
    firstSpot.textContent = `${members[2].membership}: ${members[2].name}`;

    let secondSpot = document.createElement("p");
    secondSpot.textContent = `${members[1].membership}: ${members[1].name}`;

    let thirdSpot = document.createElement("p");
    thirdSpot.textContent = `${members[0].membership}: ${members[0].name}`;

    spotlight1.appendChild(firstSpot);
    spotlight2.appendChild(secondSpot);
    spotlight3.appendChild(thirdSpot);
}

getCompaniesData();
