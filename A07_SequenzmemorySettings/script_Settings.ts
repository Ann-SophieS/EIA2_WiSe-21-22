namespace SequenzmemorySetting {

  /*
  Global Variables
  */
  let finalWord: String;
  let cards: HTMLSpanElement[];

  interface GameSettings {
    finalWord: String; 
    cardSize: number;
    countdownDuration: number; 
    font: String;
    cardBackColor: String; 
    cardFrontColor: String; 
    cardFontColor: String;
  }
  

  const form: HTMLFormElement = document.querySelector("#settingsForm");

  

  form.onsubmit = () => {
    console.log((document.querySelector("#cardSize") as HTMLInputElement).value);
    let settings: GameSettings = {
      finalWord: (document.querySelector("#textfeld") as HTMLInputElement).value as String,
      cardSize: +(document.querySelector("#cardSize") as HTMLInputElement).value,
      countdownDuration: +(document.querySelector("#durationSelect") as HTMLInputElement).value,
      font: (document.querySelector("#fontSelect") as HTMLInputElement).value as String,
      cardBackColor: (document.querySelector("#cardColorBack") as HTMLInputElement).value as String,
      cardFrontColor: (document.querySelector("#cardColorFront") as HTMLInputElement).value as String,
      cardFontColor: (document.querySelector("#fontColor") as HTMLInputElement).value as String
    };

    startGame(settings);

    return false; // prevent reload
  };



  function startGame(settings: GameSettings): void {
    const htmlBody: HTMLElement = document.querySelector("body");
    console.log("Hello from the startGame function.");
    console.log(settings);
  }


  function createCard(): void {
    return;
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