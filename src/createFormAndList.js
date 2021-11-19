export function createFormAndList() {
  const formWrapper = document.querySelector(".form-wrapper");
  const formEl = document.createElement("div");
  formEl.classList.add("form");
  formWrapper.prepend(formEl);
  formEl.innerHTML = `
  <form>
    <input placeholder="Введите город" required autofocus>
    <button>Узнать погоду</button>
    </form>
    `;
  const list = document.createElement("div");
  list.setAttribute("class", "list");
  formWrapper.append(list);
  const ul = document.createElement("ul");
  list.append(ul);
}
