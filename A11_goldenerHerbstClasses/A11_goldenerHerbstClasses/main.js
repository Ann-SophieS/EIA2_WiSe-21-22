var L09_2_Classes;
(function (L09_2_Classes) {
    window.addEventListener("load", handleLoad);
    var golden = 0.62;
    function handleLoad(_event) {
        console.log("FirstPart");
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_2_Classes.crc2 = canvas.getContext("2d");
        var horizon = L09_2_Classes.crc2.canvas.height * golden;
        drawBackground();
        drawSun({ x: 100, y: 100 });
        drawMountains({ x: 0, y: horizon }, 75, 200, "grey", "white");
        drawMountains({ x: 0, y: horizon }, 50, 150, "grey", "lightgrey");
        drawTree({ x: 600, y: 400 });
        drawTree({ x: 200, y: 500 });
        drawSquirrel({ x: 300, y: 400 }, { x: 250, y: 250 });
        drawSquirrel({ x: 100, y: 500 }, { x: 250, y: 250 });
        var cloud = new L09_2_Classes.Cloud();
        cloud.draw();
        var leaves = new L09_2_Classes.Leaf(1);
        console.log("Leaf");
        leaves.draw();
        leaves.move(0.1);
    }
    function drawBackground() {
        console.log("Background");
        var gradient = L09_2_Classes.crc2.createLinearGradient(0, 0, 0, L09_2_Classes.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "lightyellow");
        gradient.addColorStop(1, "green");
        L09_2_Classes.crc2.fillStyle = gradient;
        L09_2_Classes.crc2.fillRect(0, 0, L09_2_Classes.crc2.canvas.width, L09_2_Classes.crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        var r1 = 30;
        var r2 = 150;
        var gradient = L09_2_Classes.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "yellow");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%,0");
        L09_2_Classes.crc2.save();
        L09_2_Classes.crc2.translate(_position.x, _position.y);
        L09_2_Classes.crc2.fillStyle = gradient;
        L09_2_Classes.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L09_2_Classes.crc2.fill();
        L09_2_Classes.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains");
        var stepMin = 50;
        var stepMax = 150;
        var x = 0;
        L09_2_Classes.crc2.save();
        L09_2_Classes.crc2.translate(_position.x, _position.y);
        L09_2_Classes.crc2.beginPath();
        L09_2_Classes.crc2.moveTo(0, 0);
        L09_2_Classes.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            var y = -_min - Math.random() * (_max - _min);
            L09_2_Classes.crc2.lineTo(x, y);
        } while (x < L09_2_Classes.crc2.canvas.width);
        L09_2_Classes.crc2.lineTo(x, 0);
        L09_2_Classes.crc2.closePath();
        var gradient = L09_2_Classes.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L09_2_Classes.crc2.fillStyle = gradient;
        L09_2_Classes.crc2.fill();
        L09_2_Classes.crc2.restore();
    }
    function drawTree(_position) {
        L09_2_Classes.crc2.save();
        L09_2_Classes.crc2.translate(_position.x, _position.y);
        L09_2_Classes.crc2.beginPath();
        L09_2_Classes.crc2.fillStyle = "brown";
        L09_2_Classes.crc2.fillRect(0, 0, 15, -60);
        L09_2_Classes.crc2.fillStyle = "orange";
        drawCircle(0, -100, 50);
        drawCircle(-15, -100, 50);
        function drawCircle(_x, _y, _radius) {
            L09_2_Classes.crc2.beginPath();
            L09_2_Classes.crc2.arc(_x, _y, _radius, 0, 2 * Math.PI);
            L09_2_Classes.crc2.fill();
        }
        L09_2_Classes.crc2.restore();
    }
    function drawSquirrel(_position, _size) {
        L09_2_Classes.crc2.beginPath();
        L09_2_Classes.crc2.fillStyle = "brown";
        L09_2_Classes.crc2.arc(_position.x + 130, _position.y + 20, 25, 0, 1.5 * Math.PI);
        L09_2_Classes.crc2.arc(_position.x + 132, _position.y + -20, 20, 0, 4 * Math.PI);
        L09_2_Classes.crc2.arc(_position.x + 165, _position.y + -1, 0, 0, 0 * Math.PI);
        L09_2_Classes.crc2.closePath();
        L09_2_Classes.crc2.fill();
        L09_2_Classes.crc2.restore();
    }
})(L09_2_Classes || (L09_2_Classes = {}));
//# sourceMappingURL=main.js.map