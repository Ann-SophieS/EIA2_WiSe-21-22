namespace GoldenerHerbst {
interface Vector {
    x: number;
    y: number;
}

window.addEventListener ("load", handleLoad);
let crc2: CanvasRenderingContext2D;
let golden: number = 0.62;


function handleLoad(_event: Event): void {
    let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    if (!canvas)
        return;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

    drawBackground();

    drawSun({x: 100, y: 100});

    drawCloud ({ x: 550, y: 150}, {x: 225, y: 100});

    mountains({ x: 0, y: 600 }, 50, 320, "grey", "white");
    mountains({ x: 0, y: 600 }, 70, 160, "grey", "white");

}

function drawBackground(): void {
console.log("Background");

let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
gradient.addColorStop(0, "lightblue");
gradient.addColorStop(golden, "lightyellow");
gradient.addColorStop(1, "green");

crc2.fillStyle = gradient;
crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
}

function drawSun(_position: Vector): void {
    console.log("Sun", _position);

    let r1: number = 30;
    let r2: number = 150;
    let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

    gradient.addColorStop(0, "yellow");
    gradient.addColorStop(1, "HSLA(60, 100%, 50%,0");

    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.fillStyle = gradient;
    crc2.arc(0, 0, r2, 0, 2 * Math.PI);
    crc2.fill();
    crc2.restore();
    }

function drawCloud(_position: Vector, _size: Vector): void {
    console.log("Cloud", _position);
    let nParticles: number = 45;
    let radiusParcticle: number = 50;                                            // r=radius
    let particle: Path2D = new Path2D();
    let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParcticle);

    particle.arc(0, 0, radiusParcticle, 0, 2 * Math.PI);
    gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
    gradient.addColorStop(1, "HSLA(0, 010%, 100%, 0)");

    crc2.save();
    crc2.translate(_position.x, _position.y);

    crc2.fillStyle = gradient;

    for (let drawn: number = 0; drawn < nParticles; drawn++) {
        crc2.save();
        let x: number = (Math.random() - 0.5) * _size.x;
        let y: number = - (Math.random() * _size.y);
        crc2.translate(x, y);
        crc2.fill(particle);
        crc2.restore();
    }
    crc2.restore();
    }

function mountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains");
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();


        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }
}