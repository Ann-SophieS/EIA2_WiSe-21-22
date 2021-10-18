namespace RandomPoem {

let subjekt: string[] = ["Harry ","Ron ","Hermine ","Padfoot ","Snape ","Voldemort ","Dumbledore ","Fred ","George ","Hagrid "];
let praedikat: string[] = ["liebt ","sucht ","mag ","verzaubert ","hasst ","verachtet ","fühlt sich bedroht, durch ","bleibt länger für "];
let objekt: string[]= ["Hogwarts.", "Harry.","den Elderstab.", "Zaubertränke.","die Karte des Herumtreibers.","den kopflosen Nick.","Kuchen.","Silberschweif.","Dementoren"];

for (let i: number = subjekt.length; i > 0; i--) {
    let y: string = getVerse(subjekt, praedikat, objekt);
    console.log(y);
}

function getVerse(_subjekt: string[], _praedikat: string[], _objekt: string[]): string {

    let verse: string = "";

    let randomSubjekt: number = Math.floor(Math.random() * _subjekt.length);
    verse += _subjekt.splice(randomSubjekt, 1)[0] + " ";

    let randomPraedikat: number = Math.floor(Math.random() * _praedikat.length);
    verse += _praedikat.splice(randomPraedikat, 1)[0] + " ";
    
    let randomObjekt: number = Math.floor(Math.random() * _objekt.length);
    verse += _objekt.splice(randomObjekt, 1)[0];

    return(verse);
} }