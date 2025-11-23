export function showLocalStrgData(itemsArray, el) {
  el.innerHTML = `${itemsArray.map((item) => `<li class="city-list__item">${item}</li>`).join("")}`;
}
