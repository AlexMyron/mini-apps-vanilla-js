export default class Timer {
  constructor({ refs, onTick }) {
    this.timerId = null;
    this.isActive = true;
    this.refs = refs;
    this.onTick = onTick;

    this.onTick(this.getTimeComponent(0));
  }

  start() {
    if (!this.isActive) {
      return;
    }
    const startTime = new Date();

    this.timerId = setInterval(() => {
      const currentTime = new Date();
      const deltaTime = currentTime - startTime;

      this.renderClockface(deltaTime);
    }, 10);

    this.isActive = false;
  }

  stop() {
    if (this.isActive) {
      return;
    }
    clearInterval(this.timerId);
    this.isActive = true;
  }

  reset() {
    this.stop();
    this.renderClockface(0);
    console.log(this.isActive);
  }

  getTimeComponent(time) {
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  renderClockface(value) {
    const time = this.getTimeComponent(value);
    this.onTick(time);
  }
}
