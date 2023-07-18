// Function to format the date and time
function formatDateTime(dateTime) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };
  return dateTime.toLocaleString(undefined, options);
}

// Get the current date and time
const currentDate = new Date();
const formattedDateTime = formatDateTime(currentDate);

// Get the current year
const currentYear = currentDate.getFullYear();

// Update the HTML elements with the formatted date and current year
document.getElementById("currentDateTime").textContent = formattedDateTime;
document.getElementById("currentYear").textContent = currentYear;

// // set drink order date on fresh page

if (URL == "index.html") {
  // initialize display elements
  const numDrinksDisplay = document.getElementById("drink-counter");

  // get the stored value in localStorage
  let numDrinks = localStorage.numDrinks;

  // determine if this is the first visit or display the number of visits.
  if (numDrinks != undefined) {
    numDrinksDisplay.innerText = numDrinks;
  } else {
    numDrinksDisplay.innerText = 0;
    localStorage.numDrinks = 0;
  }
}
