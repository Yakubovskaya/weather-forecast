export async function getUserCityWeather() {
  const API_KEY_WEATHER = "b071b1f9cb6a205c491857b865f1bf99";
  const ipData = await fetch("https://ipapi.co/json/", {
    method: "GET",
  }).then((response) => response.json());
  const weatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${ipData.latitude}&lon=${ipData.longitude}&appid=${API_KEY_WEATHER}`,
    {
      method: "GET",
    }
  ).then((response) => response.json());
  return weatherData;
}
