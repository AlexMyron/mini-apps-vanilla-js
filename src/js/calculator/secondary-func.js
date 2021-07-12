export default function renderResult(operator, numberOne, numberTwo) {
  let result;
  if (operator === '+') result = numberOne + numberTwo;
  if (operator === '-') result = numberOne - numberTwo;
  if (operator === '*') result = numberOne * numberTwo;
  if (operator === '/') result = numberOne / numberTwo;
  if (operator === '') result = 0;

  return result;
}
