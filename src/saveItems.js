export function saveItems() {
  const input = document.querySelector("input");
  const itemsArray = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];
  itemsArray.push(input.value);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  if (itemsArray.length > 10) {
    itemsArray.splice(0, 1);
    localStorage.setItem("items", JSON.stringify(itemsArray));
  }
}
