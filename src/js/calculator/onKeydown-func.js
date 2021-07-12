import { refs, params } from './data';
import renderResult from './secondary-func';

const { display } = refs;
let { firstNumber, secondNumber, operator, previousKey, previousKeyType, result } = params;

export default function onKeydown(e) {
  const key = e.key;
  if (key === 'Alt' || key === 'CapsLock' || key === 'Control' || key === 'Shift') return;

  let type = null;

  if (
    key === '1' ||
    key === '2' ||
    key === '3' ||
    key === '4' ||
    key === '5' ||
    key === '6' ||
    key === '7' ||
    key === '8' ||
    key === '9' ||
    key === '0'
  )
    type = 'number';

  if (key === '+' || key === '-' || key === '*' || key === '/') type = 'operator';

  if (key === 'Enter') type = 'equal';
  if (key === 'Delete' || key === 'Escape') type = 'reset';

  if (type === 'number' && previousKeyType !== 'operator') {
    firstNumber += key;
    display.textContent = firstNumber;
  }

  if (type === 'operator' && secondNumber === '') {
    operator = key.trim();

    display.textContent = operator;

    previousKeyType = 'operator';
  }

  if (previousKeyType === 'operator' && type === 'number') {
    secondNumber += key;

    display.textContent = secondNumber;
  }

  if (type === 'operator' && secondNumber !== '') {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    result = renderResult(operator, firstNumber, secondNumber);
    display.textContent = result;

    firstNumber = result;
    secondNumber = '';
    operator = key.trim();
  }

  if (type === 'equal') {
    e.preventDefault();

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    result = renderResult(operator, firstNumber, secondNumber);
    display.textContent = result;

    resetParams();
  }

  if (type === 'reset') {
    display.textContent = '0';

    resetParams();
  }
}

function resetParams() {
  firstNumber = '';
  secondNumber = '';
  operator = '';
  previousKeyType = '';
  result = '';
}
