
const subjekt: string[] = ["Harry","Ron","Hermine","Padfoot","Snape","Voldemort","Dumbledore","Fred","George","Hagrid"];
const praedikat: string[] = ["liebt","sucht","mag","verzaubert","hasst","verachtet","fühlt sich bedroht, durch","bleibt länger für"];
const objekt: string[]= ["Hogwarts", "Harry","den Elderstab", "Zaubertränke","die Karte des Herumtreibers","den kopflosen Nick","Kuchen","Silberschweif","Dementoren"];

//console.log("Expecto Patronum");

var randPoemSub = subjekt[Math.floor(Math.random() * subjekt.length)];
var randPoemPra = praedikat[Math.floor(Math.random() * praedikat.length)];
var randPoemObj = objekt[Math.floor(Math.random() * objekt.length)];

console.log(randPoemSub , randPoemPra , randPoemObj);