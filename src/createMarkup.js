export function createMarkup(el, weatherData) {
  const API_MAP = "AIzaSyCVGDC-uRpiX2HiexHVIBHz5k_obk7c1XQ";
  el.innerHTML = `
            <div class="weather-box">
            <p class="city"></p>
            <p class="temp"></p>
            <p class="descr"></p>
            <div class="icon"></div>
            </div>`;
  const temp = el.querySelector(".temp");
  const city = el.querySelector(".city");
  const icon = el.querySelector(".icon");
  const descr = el.querySelector(".descr");
  temp.innerHTML = `${Math.round(weatherData.main.temp - 273)}&deg`;
  city.innerHTML = weatherData.name;
  descr.textContent = weatherData.weather[0].description;
  icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png">`;
  const map = document.createElement("div");
  map.classList.add("map");
  el.querySelector(".weather-box").append(map);
  map.innerHTML = `<img src="https://maps.googleapis.com/maps/api/staticmap?center=${weatherData.name}&zoom=9&size=300x300&&markers=size:mid%7Ccolor:0xFFFF00%7C${weatherData.name}&key=${API_MAP}">`;
}
