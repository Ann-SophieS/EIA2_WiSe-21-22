namespace SequenzmemorySetting{

  window.addEventListener("load", handleLoad);

  function handleLoad(_event: Event): void {
    let startButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#playButton");
    startButton.addEventListener("pointerup", startGame);
}

}






















function TimerTen(): void {
  this.counter = { min: 0, sec: 10 }; // choose whatever you want
  let intervalId: number = setInterval(() => {
    if (this.counter.sec - 1 == -1) {

      this.counter.min -= 1;
      this.counter.sec = 59;
    }
    else this.counter.sec -= 1;
    if (this.counter.min === 0 && this.counter.sec == 0) clearInterval(intervalId);
  },                                   1000);
}

function TimerTwenty(): void {
  this.counter = { min: 0, sec: 20 }; // choose whatever you want
  let intervalId: number = setInterval(() => {
    if (this.counter.sec - 1 == -1) {

      this.counter.min -= 1;
      this.counter.sec = 59;
    }
    else this.counter.sec -= 1;
    if (this.counter.min === 0 && this.counter.sec == 0) clearInterval(intervalId);
  },                                   1000);
}

function TimerThirty(): void {
  this.counter = { min: 0, sec: 30 }; // choose whatever you want
  let intervalId: number = setInterval(() => {
    if (this.counter.sec - 1 == -1) {

      this.counter.min -= 1;
      this.counter.sec = 59;
    }
    else this.counter.sec -= 1;
    if (this.counter.min === 0 && this.counter.sec == 0) clearInterval(intervalId);
  },                                   1000);
}