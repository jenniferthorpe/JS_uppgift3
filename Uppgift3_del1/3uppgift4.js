//Funktionen räknar ut volym och area för en sfär.
function sfär (radie){
    let volym = ((4*Math.PI) * Math.pow(radie, 3))/3;
    let area = (4*Math.PI) * Math.pow(radie, 2);
    return omSfären = [volym.toFixed(2), area.toFixed(2)];
}

//Anropar funktionen och läser in argumentet. 
sfär(prompt("Ange sfärens radie i cm: "));

alert("Sfärens volym är " + omSfären[0] + " cm3 och arean är " + omSfären[1] + " cm2");
