const ref = {
  input: document.querySelector('.js-input'),
  btn: document.querySelector('.js-btn'),
  toDoList: document.querySelector('.js-list'),
  // deleteBtn: document.querySelector('.js-deleteBtn'),
};

const { input, btn, toDoList } = ref;

input.addEventListener('input', onInputAction);
btn.addEventListener('click', onButtonCreate);
toDoList.addEventListener('click', onButtonDelete);
window.addEventListener('keydown', onKeyEnter);

let checkId = 0;

function onKeyEnter(e) {
  const taskValue = input.dataset.value;
  if (e.key !== 'Enter' || !taskValue) return;

  const markup = markupItem(taskValue);
  addMarkup(markup);

  taskValue = '';
  // input.value = '';
}

function onInputAction(e) {
  input.dataset.value = '';
  input.dataset.value += e.target.value;
}

function onButtonCreate(e) {
  const taskValue = input.dataset.value;
  const markup = markupItem(taskValue);
  addMarkup(markup);

  input.value = '';
}

function onButtonDelete(e) {
  if (e.target.nodeName !== 'BUTTON') return;

  e.target.parentNode.style.display = 'none';
}

function markupItem(value) {
  checkId += 1;
  return `<li class="toDo__item js-item">
            <input type="checkbox" class="check__input" id="checkId-${checkId}"/>
            <span class="checkbox"></span>
            <label class="check" for="checkId-${checkId}">
            ${value}
            </label>
            <button class="toDo__delete js-deleteBtn" type="button">-</button>
          </li>`;
}

function addMarkup(markup) {
  toDoList.insertAdjacentHTML('beforeend', markup);
}
