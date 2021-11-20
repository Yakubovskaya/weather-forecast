import { liMaker } from "./liMaker";

export function showItems() {
  const data = JSON.parse(localStorage.getItem("items"));
  data.forEach((item) => {
    liMaker(item);
  });
}
