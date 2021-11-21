import "./styles/style.css";
import { createWeatherForecast } from "./createWeatherForecast";

const el = document.querySelector("#app");
createWeatherForecast(el);
