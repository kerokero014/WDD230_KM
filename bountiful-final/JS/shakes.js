// This function get fruits data from json file
async function getFruits() {
  const response = await fetch(
    "https://kerokero014.github.io/WDD230_KM/bountiful-final/JS/fruit.json"
  );
  const data = await response.json();
  return data.fruits;
}
getFruitOptions();

// This function display fruit options in the drink's form
async function displayFruitOptions() {
    const fruits = await getFruits();
    const firstFruitOptions = await getFruitOptions(0, 6, fruits);
    const secondFruitOptions = await getFruitOptions(7, 13, fruits);
    const thirdFruitOptions = await getFruitOptions(14, 20, fruits);
    // Display fruit options
    addFruitOptions(document.querySelector("#first-fruit"), firstFruitOptions);
    addFruitOptions(document.querySelector("#second-fruit"), secondFruitOptions);
    addFruitOptions(document.querySelector("#third-fruit"), thirdFruitOptions);

    // This function adds fruit options to a given select element in html
    function addFruitOptions(element, options) {
        for (const option of options) {
            const optionElement = document.createElement('option');
            optionElement.textContent = option.name
            element.appendChild(optionElement);
        }
    }
}

displayFruitOptions();

// This function get a selected range of fruits. It receives an array of object fruits.
async function getFruitOptions(startCount, endCount, fruits) {
    let fruitOptions = [];
    for (let i = startCount; i < endCount; i++) {
        fruitOptions.push(fruits[i])
    }
    return fruitOptions;
}

// This function displays the customer's order
async function displayOrder() {
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const firstFruit = document.querySelector("#first-fruit").value;
    const secondFruit = document.querySelector("#second-fruit").value;
    const thirdFruit = document.querySelector("#third-fruit").value; 
    const specialInstructions = document.querySelector("#special-instructions");

    const orderCard = document.querySelector("#order-info")

    // Append data to order info
    const nameParagraph = document.createElement("p")
    nameParagraph.textContent = `Name: ${name}`
    orderCard.appendChild(nameParagraph);
    
    // E-mail field
    const emailParagraph = document.createElement("p");
    emailParagraph.textContent = `Email: ${email}`;
    orderCard.appendChild(emailParagraph);

    // Phone field
    const phoneParagraph = document.createElement("p");
    phoneParagraph.textContent = `Phone: ${phone}`;
    orderCard.appendChild(phoneParagraph);

    // Drink field
    const drinkParagraph = document.createElement("p");
    drinkParagraph.textContent = `Drink: ${firstFruit}, ${secondFruit}, ${thirdFruit}`
    orderCard.appendChild(drinkParagraph)

    // Special Instructions field
    const specialInstructionsParagraph = document.createElement("p");
    specialInstructionsParagraph.textContent = specialInstructions.value === "" ? `Special Instructions: Not applied`:`Special instructions: ${specialInstructions.value}`
    orderCard.appendChild(specialInstructionsParagraph);

    const nutritionalInfos = await getNutritionalInfo(firstFruit, secondFruit, thirdFruit);
    displayNutritionalInfo(nutritionalInfos)
    
    async function getNutritionalInfo(...fruits) {
        const fruitsData = await getFruits();
        const nutritionalInfos = [];

        for (const fruitId of Object.keys(fruitsData)) {
            if (fruits.includes(fruitsData[fruitId].name)) {
                nutritionalInfos.push(fruitsData[fruitId])
            }
        }
        return nutritionalInfos;
    }

    function displayNutritionalInfo(nutritionalInfos) {
        let carbohydrates = 0;
        let protein = 0;
        let fat = 0;
        let calories = 0;
        let sugar = 0;

        for (const nutritionalInfo of nutritionalInfos) {
            const nutritions = nutritionalInfo.nutritions
            carbohydrates += nutritions.carbohydrates
            protein += nutritions.protein
            fat += nutritions.fat
            calories += nutritions.calories
            sugar += nutritions.sugar
        }

        // Display carbohydrates field
        const carbohydratesParagraph = document.createElement("p");
        carbohydratesParagraph.textContent = `Carbohydrates: ${carbohydrates}`
        orderCard.appendChild(carbohydratesParagraph);

        // Display carbohydrates field
        const proteinParagraph = document.createElement("p");
        proteinParagraph.textContent = `Protein: ${protein}`
        orderCard.appendChild(proteinParagraph);

        // Display fat field
        const FatParagraph = document.createElement("p");
        FatParagraph.textContent = `Fat: ${fat}`
        orderCard.appendChild(FatParagraph);

        // Display calories field
        const CaloriesParagraph = document.createElement("p");
        CaloriesParagraph.textContent = `Calories: ${calories}`
        orderCard.appendChild(CaloriesParagraph);

        // Display sugar field
        const SugarParagraph = document.createElement("p");
        SugarParagraph.textContent = `Sugar: ${sugar}`
        orderCard.appendChild(SugarParagraph);
    }

    addOrderToLocalStorage();
}

function addOrderToLocalStorage() {
    let numberOfOrders = Number(localStorage.getItem("numberOfOrders"));
    numberOfOrders += 1;
    localStorage.setItem("numberOfOrders", numberOfOrders);
}

document.querySelector("#send-order").addEventListener("click", displayOrder)