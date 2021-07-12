import { refs } from './data';
import onClickButton from './onClick-func';
import onKeydown from './onKeydown-func';

const { calculator } = refs;

calculator.addEventListener('click', onClickButton);
window.addEventListener('keydown', onKeydown);
