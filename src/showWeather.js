import { showUserCityWeather } from "./showUserCityWeather";
import { showInputWeather } from "./showInputWeather";

export async function showWeather() {
  showUserCityWeather();
  showInputWeather();
}
