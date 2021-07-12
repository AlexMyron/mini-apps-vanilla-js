import refs from './stopwatch-refs';
import Timer from './stopwatch-class';

const timer = new Timer({
  refs: refs,
  onTick: updateClockface,
});

refs.btnStart.addEventListener('click', timer.start.bind(timer));
refs.btnStop.addEventListener('click', timer.stop.bind(timer));
refs.btnReset.addEventListener('click', timer.reset.bind(timer));

function updateClockface({ mins, secs }) {
  refs.clockface.textContent = `${mins}:${secs}`;
}
