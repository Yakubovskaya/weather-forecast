export function liMaker(text) {
  const ul = document.querySelector("ul");
  const listItem = document.createElement("li");
  listItem.innerHTML = text;
  ul.append(listItem);
}
