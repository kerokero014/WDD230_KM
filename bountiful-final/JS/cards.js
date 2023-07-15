let smoothiesData = null;
let currentSmoothie = null;

// Fetch smoothie data
fetch('https://kerokero014.github.io/WDD230_KM/bountiful-final/JS/flavors.json')
  .then(response => response.json())
  .then(data => {
    smoothiesData = data;
    currentSmoothie = getRandomSmoothie();
    updateCard();
  });

// Get a random smoothie
function getRandomSmoothie() {
  const randomIndex = Math.floor(Math.random() * smoothiesData.smoothies.length);
  return smoothiesData.smoothies[randomIndex];
}

// Update the smoothie card
function updateCard() {
  const card = document.getElementById("smoothie-card");
  if (currentSmoothie) {
    card.innerHTML = `
      <h2>${currentSmoothie.name}</h2>
      <img src="${currentSmoothie.picture}" alt="${currentSmoothie.name}" style="width: 100%;">
      <p class="ingredients">Ingredients: ${currentSmoothie.ingredients.join(", ")}</p>
    `;
  } else {
    card.innerHTML = "<h2>No smoothie found</h2>";
  }
}

// Randomize the smoothie card
function randomizeCard() {
  currentSmoothie = getRandomSmoothie();
  updateCard();
}