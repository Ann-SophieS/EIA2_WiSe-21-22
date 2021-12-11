namespace L09_2_Classes {

    export class Cloud {

        position: Vector;
        size: Vector;
        velocity: Vector;
        gradient: CanvasGradient;

        constructor() {

            this.position = new Vector(0, 0);
            this.size = new Vector (200, 75);
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);
        }

        move(_timeslice: number): void {


            let offset: Vector = new Vector(this.velocity.x, 0);
            offset.scale(_timeslice);
            this.position.add(offset);

            console.log(this.position);

            if (this.position.x < 0)
            this.position.x += crc2.canvas.width;

            if (this.position.y < 0)
            this.position.x += crc2.canvas.height;
        }

        draw(): void {

            let nParticles: number = 45;
            let radiusParticle: number = 50;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 010%, 100%, 0)");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = gradient;

            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x: number = (Math.random() - 0.5) * this.size.x;
                let y: number = - (Math.random()) * this.size.y;
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();
        }
    }
}