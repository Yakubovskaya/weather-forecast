import "./styles/style.css";
import { realizeWeatherForecast } from "./application/realizeWeatherForecast";

const el = document.querySelector("#app");
realizeWeatherForecast(el);
