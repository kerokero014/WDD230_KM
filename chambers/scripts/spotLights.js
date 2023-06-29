const spotlightUrl = "";

async function getCompaniesData() {
    const response = await fetch(spotlightUrl);
    const data = await response.json();
    //console.log(data.company);
    displaySpotlights(data.company);
    displayMembers(data.member);
}
function displaySpotlights(companies) {
    const spotlights = document.querySelector("#spotlights");

    const samComp = [0,2,5];
    const christineComp = [3,6,7];
    const joseComp = [1,4,8];
    
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
        let name = document.createElement("h2");
        let logo = document.createElement("img");
        let catchPhrase = document.createElement("h3");
        let contactDetails = document.createElement("div");
        let email = document.createElement("p");
        let phoneNum = document.createElement("p");
        let link = document.createElement("a");

        name.textContent = `${companies[number].name}`;
        catchPhrase.textContent = `${companies[number].catchphrase}`;

        email.textContent = `${companies[number].email}`;
        phoneNum.textContent = `${companies[number].phonenumber}`;
        link.textContent = ` ${companies[number].linkname}`;

        div.setAttribute("class", "spotlight");
        logo.setAttribute("src", companies[number].imageurl);
        logo.setAttribute("alt", `Company logo of ${companies[number].name}`);

        contactDetails.setAttribute("class", "spots-contact-details");
        link.setAttribute("href", companies[number].weburl);
        link.setAttribute("target", "blank");   

        contactDetails.appendChild(email);
        contactDetails.appendChild(phoneNum);
        contactDetails.appendChild(link);
        
        div.appendChild(name);
        div.appendChild(logo);
        div.appendChild(catchPhrase);
        div.appendChild(contactDetails);

        spotlights.appendChild(div);

    }) 
}
function displayMembers(members) {
    let spotlight1 = document.querySelector(".spotlight:first-child");
    let spotlight2 = document.querySelector(".spotlight:nth-child(2)");
    let spotlight3 = document.querySelector(".spotlight:nth-child(3)");

    spotlight1.setAttribute("id","spotlight1");
    spotlight2.setAttribute("id","spotlight2");
    spotlight3.setAttribute("id","spotlight3");

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