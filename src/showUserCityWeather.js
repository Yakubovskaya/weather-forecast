export async function showUserCityWeather(el) {
  const API_KEY_WEATHER = "b071b1f9cb6a205c491857b865f1bf99";
  const API_KEY_LOCATION = "9d2554b61adfe77f5ea244682f3fc4a3898ee6c3";
  const IpData = await fetch("https://ipapi.co/json/", {
    method: "GET",
  }).then((response) => response.json());

  const options = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Token ${API_KEY_LOCATION}`,
    },
  };

  const locationData = await fetch(
    `https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=${IpData.ip}`,
    options
  ).then((response) => response.json());

  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${locationData.location.data.city}&appid=${API_KEY_WEATHER}`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((weatherData) => {
      el.innerHTML = `
            <div class="weather-box">
            <p class="city"></p>
            <p class="temp"></p>
            <p class="descr"></p>
            <div class="icon"></div>`;
      const temp = el.querySelector(".temp");
      const city = el.querySelector(".city");
      const icon = el.querySelector(".icon");
      const descr = el.querySelector(".descr");
      temp.innerHTML = `${Math.round(weatherData.main.temp - 273)}&deg`;
      city.innerHTML = weatherData.name;
      descr.textContent = weatherData.weather[0].description;
      icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png">`;
    });
  const weather = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${locationData.location.data.city}&appid=${API_KEY_WEATHER}`,
    {
      method: "GET",
    }
  ).then((response) => response.json());
  document.querySelector("#ip").innerHTML = IpData.ip;
  document.querySelector("#ip2").innerHTML = IpData.city;
  document.querySelector("#ip3").innerHTML = weather.name;
}
