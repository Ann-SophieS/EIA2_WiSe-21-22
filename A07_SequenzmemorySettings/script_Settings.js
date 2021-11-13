var SequenzmemorySetting;
(function (SequenzmemorySetting) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        var startButton = document.querySelector("#playButton");
        startButton.addEventListener("pointerup", startGame);
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