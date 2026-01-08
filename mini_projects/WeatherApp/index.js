const inputBox = document.querySelector('.input-box');
const searchBtn = document.querySelector('#search-btn');
const weatherIcon = document.querySelector('.weather-icon');
const weatherBody = document.querySelector('.weather-body');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.querySelector('#humidity');
const windSpeed = document.querySelector('#wind-speed');
const locationNotFound = document.querySelector('.location-not-found');

searchBtn.addEventListener('click', () => {
  checkWeather(inputBox.value);
});

async function checkWeather(city) {
  const apiKey = '52ab7841c8146cf28541333a5afa227a';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const weather_data = await fetch(url).then((response) => response.json());

  if (weather_data.cod === '404') {
    locationNotFound.style.display = 'flex';
    weatherBody.style.display = 'none';
    return;
  }

  locationNotFound.style.display = 'none';
  weatherBody.style.display = 'flex';

  // console.log(weather_data);
  temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
  description.innerHTML = `${weather_data.weather[0].description}`;
  humidity.innerHTML = `Humidity: ${weather_data.main.humidity}%`;
  windSpeed.innerHTML = `Wind Speed: ${weather_data.wind.speed} km/h`;

  switch (weather_data.weather[0].main) {
    case 'Clouds':
      weatherIcon.src = './assets/cloud.png';
      break;
    case 'Clear':
      weatherIcon.src = './assets/clear.png';
      break;
    case 'Haze':
      weatherIcon.src = './assets/rain.png';
      break;
    case 'Mist':
      weatherIcon.src = './assets/mist.png';
      break;
    case 'Snow':
      weatherIcon.src = './assets/snow.png';
      break;
    default:
      weatherIcon.src = './assets/404.png';
      break;
  }
}
