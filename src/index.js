import "./styles/style.css";
import { showUserCityWeather } from "./showUserCityWeather";

showUserCityWeather();

// getLocation();

// function showWeather(el, data) {
//     el.innerHTML = Math.round(data.main.temp - 273);
// }

// (async function () {
//     const form = document.querySelector("form");
//     const weatherCard = document.querySelector(".weather-card");

//     async function getWeather(cityName) {
//         const API_KEY = 'b071b1f9cb6a205c491857b865f1bf99';
//         const data = await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`,
//             {
//                 method: "GET"
//             }
//         ).then((response) => response.json());
//         return data
//     }

//     form.addEventListener("submit", async (ev) => {
//         ev.preventDefault();
//         const formElement = ev.target;
//         const input = formElement.querySelector("input");
//         const cityName = input.value;
//         input.value = "";
//         const data = await getWeather(cityName);
//         showWeather(weatherCard, data);
//     });
// })();
