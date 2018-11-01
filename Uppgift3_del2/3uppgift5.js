

let array = [];

function randomDice (){

    for (let i = 0; i < 1000; i++) {
        array.push((Math.floor(Math.random() * 6) +1));
    }
    return array;
}

let nr1 = 0;
let nr2 = 0;
let nr3 = 0;
let nr4 = 0;
let nr5 = 0;
let nr6 = 0;

function print(){
    randomDice()

    for (let i in array) {
        if (array[i] === 1) {
             nr1 += 1;
        } else if (array[i] === 2) {
            nr2 += 1;          
        } else if (array[i] === 3) {
            nr3 += 1;
        } else if (array[i] === 4) {
            nr4 += 1;
        } else if (array[i] === 5) {
            nr5 += 1;
        } else if (array[i] === 6) {
            nr6 += 1;
        }
    }

    let tot = nr1 + nr2 + nr3 + nr4 + nr5 + nr6;

    console.log("Antal \t ettor: " + nr1 +  
                    "\n\t tvåor: " + nr2 + 
                    "\n\t treor: " + nr3 + 
                    "\n\t fyror: " + nr4 + 
                    "\n\t femor: " + nr5 +
                    "\n\t sexor: " + nr6 +
                    "\n\n\t totalt: " + tot);
}


print();