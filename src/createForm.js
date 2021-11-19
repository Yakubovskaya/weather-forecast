export function createForm(el) {
  const form = document.createElement("form");
  el.prepend(form);
  form.innerHTML = `
    <input placeholder="Введите город" required autofocus>
    <button>Узнать погоду</button>
    `;
}
