export async function getUserCityWeather(ipData) {
  const API_KEY_WEATHER = "b071b1f9cb6a205c491857b865f1bf99";
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${ipData.latitude}&lon=${ipData.longitude}&appid=${API_KEY_WEATHER}`
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error("Invalid City");
  } catch (e) {
    console.log(e);
  }
  return null;
}
