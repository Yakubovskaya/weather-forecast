export function removeLi() {
  const listItems = document.querySelectorAll("li");
  if (listItems.length > 10) {
    listItems[0].remove();
  }
}
