var Canvas;
(function (Canvas) {
    window.addEventListener("load", hndlLoad);
    var crc2;
    function hndlLoad(_event) {
        var canvas = document.querySelector("canvas");
        console.log(canvas);
        crc2 = canvas.getContext("2d"); // In der Konsle werden alle Eigenschaften und Methoden angezeigt die zur Verfügung stehen    
        console.log(crc2);
        for (var index = 0; index < 50; index++) {
            var x = Math.random() * 800;
            var y = Math.random() * 600;
            drawTriangle(x, y);
            var a = Math.random() * 800;
            var b = Math.random() * 600;
            drawLines(a, b);
            var c = Math.random() * 800;
            var d = Math.random() * 600;
            drawCircle(c, d);
        }
    }
    function drawTriangle(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x, _y); //Zeichnen vom Dreieck 
        crc2.lineTo(_x, _y + 70); //Angabe der Punkte und des Systems
        crc2.lineTo(_x + 80, _y + 35);
        crc2.closePath();
        crc2.fillStyle = "#F67280"; //Style 
        crc2.strokeStyle = "#F67280";
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.fill();
    }
    function drawLines(_a, _b) {
        crc2.beginPath();
        crc2.moveTo(_a, _b);
        crc2.lineTo(200, 130);
        crc2.stroke();
        crc2.strokeStyle = "#D0D5F7";
        crc2.lineWidth = 1;
    }
    function drawCircle(_c, _d) {
        crc2.beginPath();
        crc2.arc(_c, _d, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        crc2.fillStyle = "#D4F0F7";
        crc2.strokeStyle = "#FE642E";
        crc2.lineWidth = 3;
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=CanvasScript.js.map