var RandomPoem;
(function (RandomPoem) {
    var subjekt = ["Harry ", "Ron ", "Hermine ", "Padfoot ", "Snape ", "Voldemort ", "Dumbledore ", "Fred ", "George ", "Hagrid "];
    var praedikat = ["liebt ", "sucht ", "mag ", "verzaubert ", "hasst ", "verachtet ", "fühlt sich bedroht, durch ", "bleibt länger für "];
    var objekt = ["Hogwarts.", "Harry.", "den Elderstab.", "Zaubertränke.", "die Karte des Herumtreibers.", "den kopflosen Nick.", "Kuchen.", "Silberschweif.", "Dementoren"];
    for (var i = subjekt.length; i > 0; i--) {
        var y = getVerse(subjekt, praedikat, objekt);
        console.log(y);
    }
    function getVerse(_subjekt, _praedikat, _objekt) {
        var verse = "";
        var randomSubjekt = Math.floor(Math.random() * _subjekt.length);
        verse += _subjekt.splice(randomSubjekt, 1)[0] + " ";
        var randomPraedikat = Math.floor(Math.random() * _praedikat.length);
        verse += _praedikat.splice(randomPraedikat, 1)[0] + " ";
        var randomObjekt = Math.floor(Math.random() * _objekt.length);
        verse += _objekt.splice(randomObjekt, 1)[0];
        return (verse);
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=expectopatypescript.js.map