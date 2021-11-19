export async function getInputWeather(cityName) {
  const API_KEY_WEATHER = "b071b1f9cb6a205c491857b865f1bf99";
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY_WEATHER}`,
    {
      method: "GET",
    }
  ).then((response) => response.json());
  return data;
}
