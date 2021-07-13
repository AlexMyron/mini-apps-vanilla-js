const ref = {
  input: document.querySelector('.js-input'),
  btn: document.querySelector('.js-btn'),
  toDoList: document.querySelector('.js-list'),
};

const { input, btn, toDoList } = ref;

input.addEventListener('input', onInputAction);
btn.addEventListener('click', onButtonClick);

function onInputAction(e) {
  input.dataset.value = '';
  input.dataset.value += e.target.value;
  // const inputValue = input.dataset.value;
  // console.log(inputValue);
  // console.log(input.dataset.value);
}

function onButtonClick(e) {
  const taskValue = input.dataset.value;
  const markup = markupItem(taskValue);
  addMarkup(markup);

  input.value = '';
}

function markupItem(value) {
  return `<li class="toDo__item">
            <label class="check">
              <input type="checkbox" class="check__input" />
              <span class="checkbox"></span>
              ${value}
            </label>
          </li>`;
}

function addMarkup(markup) {
  toDoList.insertAdjacentHTML('beforeend', markup);
}
