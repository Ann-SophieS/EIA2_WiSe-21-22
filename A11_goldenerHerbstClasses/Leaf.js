var L09_2_Classes;
(function (L09_2_Classes) {
    var Leaf = /** @class */ (function () {
        function Leaf(_size) {
            console.log("First Step");
            this.position = new L09_2_Classes.Vector(0, 0);
            this.velocity = new L09_2_Classes.Vector(0, 0);
            this.velocity.random(100, 200);
        }
        Leaf.prototype.move = function (_timeslice) {
            console.log("Leaf move");
            var offset = new L09_2_Classes.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09_2_Classes.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.x += L09_2_Classes.crc2.canvas.height;
        };
        Leaf.prototype.draw = function (_position, _size) {
            /* console.log("Leaf draw");
             crc2.save();
             crc2.translate(this.position.x, this.position.y);
             crc2.scale(this.size, this.size);*/
            console.log("Leave", _position, _size);
            var nParticles = 15;
            var rParcticles = 10;
            var particle = new Path2D();
            var gradient = L09_2_Classes.crc2.createRadialGradient(0, 0, 0, 0, 0, rParcticles);
            particle.arc(0, 0, rParcticles, 0, 0.9 * Math.PI);
            gradient.addColorStop(0, "orange");
            L09_2_Classes.crc2.save();
            L09_2_Classes.crc2.translate(_position.x, _position.y);
            L09_2_Classes.crc2.fillStyle = gradient;
            for (var drawn = 0; drawn < nParticles; drawn++) {
                L09_2_Classes.crc2.save();
                var x = (Math.random() - 0.5) * _size.x;
                var y = -(Math.random() * _size.y);
                L09_2_Classes.crc2.translate(x, y);
                L09_2_Classes.crc2.fill(particle);
                L09_2_Classes.crc2.restore();
            }
            L09_2_Classes.crc2.restore();
        };
        return Leaf;
    }());
    L09_2_Classes.Leaf = Leaf;
})(L09_2_Classes || (L09_2_Classes = {}));
//# sourceMappingURL=Leaf.js.map