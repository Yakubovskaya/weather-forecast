export function createWeatherAndMapCard(el, weatherData) {
  el.innerHTML = `
    <div class="weather-card__content">
      <p class="weather-card__city">${weatherData.name}</p>
      <p class="weather-card__temp">${Math.round(weatherData.main.temp - 273)}&deg</p>
      <p class="weather-card__description">${weatherData.weather[0].description}</p>
      <div class="weather-card__icon">
        <img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" alt="Weather icon">
      </div>
    </div>
  `;
}
