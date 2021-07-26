const refs = {
  rgb_set: document.querySelector('.rgb-guess'),
  newColorBtn: document.querySelector('.colors-set'),
  colorsList: document.querySelector('.colors-wrapper-guess'),
  resultDisplay: document.querySelector('.result'),
};

const { rgb_set, newColorBtn, colorsList, resultDisplay } = refs;

let colorsSilo = [];
const colorsSet = [...colorsList.children];

newColorBtn.addEventListener('click', setColorValue);
colorsList.addEventListener('click', checkColor);

function checkColor(e) {
  if (e.target.style.backgroundColor !== rgb_set.dataset.color) {
    return (resultDisplay.textContent = 'Try Again');
  }

  resultDisplay.textContent = 'Correct';

  colorsSet.map(child => {
    child.style.backgroundColor = `${e.target.style.backgroundColor}`;
  });
}

function getRandomColor() {
  colorsSet.map(child => {
    child.style.backgroundColor = `${randomColors()}`;
    colorsSilo.push(child.style.backgroundColor);
  });
}

function setColorValue() {
  resultDisplay.textContent = '';
  getRandomColor();

  const randomIndex = randomIntegerFromInterval(0, colorsSilo.length);
  const guessedColor = colorsSilo[randomIndex];
  rgb_set.dataset.color = `${guessedColor}`;
  rgb_set.textContent = `${guessedColor}`;

  colorsSilo = [];
}

function randomColors() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
