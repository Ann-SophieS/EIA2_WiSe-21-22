 namespace L09_2_Classes {
    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    let golden: number = 0.62;

    interface Vector {
        x: number;
        y: number;
    }

    function handleLoad(_event: Event): void {
        console.log("FirstPart");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");  
        
    
    
        let horizon: number = crc2.canvas.height * golden;

        drawBackground();
    
        drawSun({x: 100, y: 100});
    
        drawMountains({ x: 0, y: horizon}, 75, 200, "grey", "white");
        drawMountains({ x: 0, y: horizon}, 50, 150, "grey", "lightgrey");
        
        drawTree({x: 600, y: 400});
        drawTree({x: 200, y: 500});

        drawSquirrel({ x: 300, y: 400 }, { x: 250, y: 250 });
        drawSquirrel({ x: 100, y: 500 }, { x: 250, y: 250 });
       
        let cloud: Cloud = new Cloud();
        cloud.draw();

        let leaves: Leaf = new Leaf(1);
        console.log("Leaf");
        leaves.draw();
        leaves.move(0.1);

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
    
    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
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
    
    function drawTree(_position: Vector): void {
    
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
    
        crc2.fillStyle = "brown";
        crc2.fillRect(0, 0, 15, -60);
    
        crc2.fillStyle = "orange";
        drawCircle(0, -100, 50);
        drawCircle(-15, -100, 50);
        function drawCircle(_x: number, _y: number, _radius: number): void {
        crc2.beginPath();
        crc2.arc(_x, _y, _radius, 0, 2 * Math.PI);
        crc2.fill();
    }
        crc2.restore();
    }

    function drawSquirrel(_position: Vector, _size: Vector): void { //funktioniert nicht ganz
        crc2.beginPath();
        crc2.fillStyle = "brown";
        crc2.arc(_position.x + 130, _position.y + 20, 25, 0, 1.5 * Math.PI);
        crc2.arc(_position.x + 132, _position.y + -20, 20, 0, 4 * Math.PI);
        crc2.arc(_position.x + 165, _position.y + -1, 0, 0, 0 * Math.PI);
        crc2.closePath();
        crc2.fill();
    
        crc2.restore();
}
      
}