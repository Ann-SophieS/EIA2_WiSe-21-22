namespace L09_2_Classes {
    export class Leaf {
        position: Vector;
        velocity: Vector;
        type: number;

        constructor(_size: number) {
            console.log("First Step");
            this.position = new Vector (0, 0);
            this.velocity = new Vector (0, 0);
            this.velocity.random(100, 200);
        }

        move(_timeslice: number): void {
            console.log("Leaf move");
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
            this.position.x += crc2.canvas.width;

            if (this.position.y < 0)
            this.position.x += crc2.canvas.height;
        }

        draw(_position: Vector, _size: Vector): void {
           /* console.log("Leaf draw");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);*/

                console.log("Leave", _position, _size);
                let nParticles: number = 15;
                let rParcticles: number = 10;
                let particle: Path2D = new Path2D();
                let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, rParcticles);
        
                particle.arc(0, 0, rParcticles, 0, 0.9 * Math.PI);
                gradient.addColorStop(0, "orange");
        
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
    }}