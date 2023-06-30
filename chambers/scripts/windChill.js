const temperature = document.querySelector("#weTempt");
const windSpeed = document.querySelector("#windSpeed");
const weatherIcon = document.querySelector("#weather-icon");
const weatherDesc = document.querySelector("#weStatus");

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Orem&units=metric&appid=4f4706ecdb802d15b52675f2b999b08a";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
apiFetch();

function displayResults(weatherData) {
  const temperatureCelsius = weatherData.main.temp;
  const temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;

  temperature.innerHTML = `<strong>${temperatureFahrenheit.toFixed(0)}</strong>°F`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  weatherDesc.textContent = desc.toUpperCase();

  var wSpeed = weatherData.wind.speed;
  var toMiles = wSpeed / 1.609344;

  windSpeed.textContent = toMiles.toFixed(1);

  if (temperatureFahrenheit <= 50 && toMiles > 3) {
    var windChill =
      35.74 +
      0.6215 * temperatureFahrenheit -
      35.75 * toMiles ** 0.16 +
      0.4275 * temperatureFahrenheit * toMiles ** 0.16;
    document.querySelector("#windChill").textContent = windChill.toFixed(1);
  } else {
    document.querySelector("#windChill").textContent = "N/A";
  }
}
