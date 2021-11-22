export function getItems() {
  const itemsArray = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];
  return itemsArray;
}

export function showItems(data, el) {
  el.innerHTML = `${data.map((item) => `<li>${item}</li>`).join("")}`;
}

export function saveItems(itemsArray) {
  if (itemsArray.length > 10) {
    itemsArray.splice(0, 1);
  }
  localStorage.setItem("items", JSON.stringify(itemsArray));
}
