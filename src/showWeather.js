import { createFormAndList } from "./createFormAndList";
import { showUserCityWeather } from "./showUserCityWeather";
import { showInputWeather } from "./showInputWeather";
import { showListItemsWeather } from "./showListItemsWeather";
import { showItems } from "./showItems";

export async function showWeather() {
  await showUserCityWeather();
  createFormAndList();
  showInputWeather();
  showItems();
  showListItemsWeather();
}
