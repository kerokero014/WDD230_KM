const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

// Function to fetch weather data
function fetchWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Handle the weather data
      console.log(data);
      // Extract and display the relevant information
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      console.log(`Temperature: ${temperature}°C`);
      console.log(`Description: ${description}`);
    })
    .catch(error => {
      console.log('Error fetching weather data:', error);
    });
}

// Example usage
const city = 'London';
fetchWeatherData(city);
