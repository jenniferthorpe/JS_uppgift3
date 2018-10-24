
//Skapar en mall för alla personuppgifter
function Person (namn, epost, mobil, gatuadress, postnummer, ort){
        this.namn = namn;
        this.epost = epost;
        this.mobil = mobil;
        this.adress = {
            Gatuadress: gatuadress,
            Postnummer: postnummer,
            Ort: ort, 
        }
        //Skapar en funktion som skriver ut namn och adress enligt svenskt format.
        this.print = function (){
            return console.log(
                            this.namn + "\n" + 
                            this.adress.Gatuadress + "\n" + 
                            this.adress.Postnummer + " " + this.adress.Ort + "\n");
        };
    };

let jennifer = new Person("Jennifer Thorpe", "jennifer.thorpe@hotmail.com", "07210000000", "Bellmansgatan 18b", "118 20", "Stockholm");
let lisa = new Person("Lisa Larsson", "lisa@hotmail.com", "0707070707", "Engataistan", "11720", "Fjollträsk");

jennifer.print();
lisa.print();




