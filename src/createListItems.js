export function liMaker(text) {
  const ul = document.querySelector("ul");
  const listItem = document.createElement("li");
  listItem.innerHTML = text;
  ul.append(listItem);
}
export function removeLi() {
  const listItems = document.querySelectorAll("li");
  if (listItems.length > 10) {
    listItems[0].remove();
  }
}
