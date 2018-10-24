
//funktionen använder Pythagoras sats för att räkna ut hypotenusan. 
function hypotenusan (katet1, katet2){
    let h1 = Math.pow(katet1, 2) + Math.pow(katet2, 2);
    return Math.sqrt(h1);
}

a = prompt("Ange ena kateten i cm: ");
b = prompt("Ange andra kateten i cm: ");

alert("Hypotenusan för din triangel är: " + hypotenusan(a, b).toFixed(2));
