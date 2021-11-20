var SequenzmemorySetting;
(function (SequenzmemorySetting) {
    /*
    Global Variables
    */
    var finalWord;
    var cards;
    var form = document.querySelector("#settingsForm");
    form.onsubmit = function () {
        console.log(document.querySelector("#cardSize").value);
        var settings = {
            finalWord: document.querySelector("#textfeld").value,
            cardSize: +document.querySelector("#cardSize").value,
            countdownDuration: +document.querySelector("#durationSelect").value,
            font: document.querySelector("#fontSelect").value,
            cardBackColor: document.querySelector("#cardColorBack").value,
            cardFrontColor: document.querySelector("#cardColorFront").value,
            cardFontColor: document.querySelector("#fontColor").value
        };
        startGame(settings);
        return false; // prevent reload
    };
    function startGame(settings) {
        var htmlBody = document.querySelector("body");
        console.log("Hello from the startGame function.");
        console.log(settings);
    }
    function createCard() {
        return;
    }
})(SequenzmemorySetting || (SequenzmemorySetting = {}));
function TimerTen() {
    var _this = this;
    this.counter = { min: 0, sec: 10 }; // choose whatever you want
    var intervalId = setInterval(function () {
        if (_this.counter.sec - 1 == -1) {
            _this.counter.min -= 1;
            _this.counter.sec = 59;
        }
        else
            _this.counter.sec -= 1;
        if (_this.counter.min === 0 && _this.counter.sec == 0)
            clearInterval(intervalId);
    }, 1000);
}
function TimerTwenty() {
    var _this = this;
    this.counter = { min: 0, sec: 20 }; // choose whatever you want
    var intervalId = setInterval(function () {
        if (_this.counter.sec - 1 == -1) {
            _this.counter.min -= 1;
            _this.counter.sec = 59;
        }
        else
            _this.counter.sec -= 1;
        if (_this.counter.min === 0 && _this.counter.sec == 0)
            clearInterval(intervalId);
    }, 1000);
}
function TimerThirty() {
    var _this = this;
    this.counter = { min: 0, sec: 30 }; // choose whatever you want
    var intervalId = setInterval(function () {
        if (_this.counter.sec - 1 == -1) {
            _this.counter.min -= 1;
            _this.counter.sec = 59;
        }
        else
            _this.counter.sec -= 1;
        if (_this.counter.min === 0 && _this.counter.sec == 0)
            clearInterval(intervalId);
    }, 1000);
}
//# sourceMappingURL=script_Settings.js.map