
//var temp= 75;
//var wSpeed= 4;
//var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));
//
//var windChill= Math.round(windChill);
//
//if (temp <= 50 && wSpeed > 3){
//    document.getElementById("windChill").innerHTML= windChill;
//}
//else{ 
//    document.getElementById("windChill").textContent =  "N/A"
//}

const temperature = document.querySelector("#weTempt");
const windSpeed = document.querySelector("#windSpeed");
const weatherIcon = document.querySelector("#weather-icon");
const weatherDesc = document.querySelector("#weStatus");

const url = "https://api.openweathermap.org/data/3.0/onecall?40.2969=33.44&-111.6946=-94.04&appid={359cb46cbdae122f5f73f09a8345faa6}";

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
    temperature.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherDesc.textContent = desc.toUpperCase();

    var temp = weatherData.main.temp;
    var wSpeed = weatherData.wind.speed;

    var toFahr = (temp * 1.8) + 32;
    var toMiles = wSpeed / 1.609344;

    windSpeed.textContent = wSpeed.toFixed(1);

    if (toFahr <= 50 && toMiles > 3) {
        windChill = 35.74 + (0.6215 * toFahr) - (35.75 * toMiles**0.16) + (0.4275 * toFahr * toMiles**0.16);
        toCels = (windChill - 32) / 1.8;
        document.querySelector("#windChill").textContent = toCels.toFixed(1);
    }
    else {
        document.querySelector("#windChill").textContent =  "N/A"
    } 
}
