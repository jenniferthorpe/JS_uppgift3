//Funktionen räknar ut en cirkels omkrets samt area.
function cirkel (radie){
    let omkrets = Math.PI * (2*radie);
    let area = Math.PI * Math.pow(radie, 2);
    return omCirkeln = [omkrets.toFixed(2), area.toFixed(2)];
}
//Anropar funktionen och läser in argumentet
cirkel(prompt("Ange cirkelns radie i cm: "));

alert("Cirkelns omkrets är " + omCirkeln[0] + " cm och arean är " + omCirkeln[1] + " cm2");
