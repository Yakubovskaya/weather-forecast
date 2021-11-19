import { createFormAndList } from "./createFormAndList";
import { showUserCityWeather } from "./showUserCityWeather";
import { showInputWeather } from "./showInputWeather";

export async function showWeather() {
  createFormAndList();
  showUserCityWeather();
  showInputWeather();
}
