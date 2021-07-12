import { refs, params } from './data';
import renderResult from './secondary-func';

const { display } = refs;
let { firstNumber, secondNumber, operator, previousKey, previousKeyType, result } = params;

export default function onClickButton(e) {
  if (e.target.nodeName !== 'BUTTON') return;

  const key = e.target;
  const keyValue = key.textContent;
  const { type } = key.dataset;

  if (type !== 'equal' && type !== 'reset') key.dataset.state = 'selected';

  if (type === 'number' && previousKeyType !== 'operator') {
    firstNumber += keyValue;
    display.textContent = firstNumber;

    previousKey.dataset.state = '';
  }

  if (type === 'operator' && secondNumber === '') {
    operator = keyValue.trim();

    display.textContent = operator;

    previousKeyType = 'operator';
    previousKey.dataset.state = '';
  }

  if (previousKeyType === 'operator' && type === 'number') {
    secondNumber += keyValue;

    display.textContent = secondNumber;
    previousKey.dataset.state = '';
  }

  if (type === 'operator' && secondNumber !== '') {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    result = renderResult(operator, firstNumber, secondNumber);
    display.textContent = result;

    firstNumber = result;
    secondNumber = '';
    operator = keyValue.trim();

    previousKey.dataset.state = '';
  }

  if (type === 'equal') {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    result = renderResult(operator, firstNumber, secondNumber);
    display.textContent = result;

    previousKey.dataset.state = '';
    resetParams();
  }

  if (type === 'reset') {
    display.textContent = '0';

    previousKey.dataset.state = '';
    resetParams();
  }

  previousKey = key;
}

function resetParams() {
  firstNumber = '';
  secondNumber = '';
  operator = '';
  previousKeyType = '';
  result = '';
}
