var L09_2_Classes;
(function (L09_2_Classes) {
    var Cloud = /** @class */ (function () {
        function Cloud() {
            this.position = new L09_2_Classes.Vector(0, 0);
            this.size = new L09_2_Classes.Vector(200, 75);
            this.velocity = new L09_2_Classes.Vector(0, 0);
            this.velocity.random(100, 200);
        }
        Cloud.prototype.move = function (_timeslice) {
            var offset = new L09_2_Classes.Vector(this.velocity.x, 0);
            offset.scale(_timeslice);
            this.position.add(offset);
            console.log(this.position);
            if (this.position.x < 0)
                this.position.x += L09_2_Classes.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.x += L09_2_Classes.crc2.canvas.height;
        };
        Cloud.prototype.draw = function () {
            var nParticles = 45;
            var radiusParticle = 50;
            var particle = new Path2D();
            var gradient = L09_2_Classes.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 010%, 100%, 0)");
            L09_2_Classes.crc2.save();
            L09_2_Classes.crc2.translate(this.position.x, this.position.y);
            L09_2_Classes.crc2.fillStyle = gradient;
            for (var drawn = 0; drawn < nParticles; drawn++) {
                L09_2_Classes.crc2.save();
                var x = (Math.random() - 0.5) * this.size.x;
                var y = -(Math.random()) * this.size.y;
                L09_2_Classes.crc2.translate(x, y);
                L09_2_Classes.crc2.fill(particle);
                L09_2_Classes.crc2.restore();
            }
            L09_2_Classes.crc2.restore();
        };
        return Cloud;
    }());
    L09_2_Classes.Cloud = Cloud;
})(L09_2_Classes || (L09_2_Classes = {}));
//# sourceMappingURL=cloud.js.map