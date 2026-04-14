//Code Question 1
//const hamburger = { name: "cheese burger", weight: 250 };
//const secondHamburger = hamburger;
//secondHamburger.name = "double cheese burger";
//secondHamburger.weight = 500;

//console.log(hamburger.name); // Output: "double cheese burger"
//console.log(hamburger.name); // Output: "double cheese burger"


//Riga 1: viene creato un oggetto hamburger con le proprietà name e weight in memoria
//Riga 2: viene creato un nuovo riferimento secondHamburger che punta allo stesso oggetto hamburger in memoria
//Riga 3: viene modificata la proprietà name dell'oggetto hamburger attraverso il riferimento secondHamburger, quindi anche hamburger.name viene modificato
//Riga 4: viene modificata la proprietà weight dell'oggetto hamburger attraverso il riferimento secondHamburger, quindi anche hamburger.weight viene modificato
//Riga 5: viene stampato il valore di hamburger.name, che è "double cheese burger" a causa della modifica fatta tramite secondHamburger
//Riga 6: viene stampato nuovamente il valore di hamburger.name, che rimane "double cheese burger"


//Code Question 2
//const hamburger = {
//name: "cheese burger",
//weight: 250,
///ingredients: ["bun", "beef patty", "cheese", "lettuce", "tomato"]

//};

//const secondHamburger = { ...hamburger };
//secondHamburger.ingredients[0] = "salad";

//console.log(hamburger.ingredients[0]); // Output: "salad"
//console.log(secondHamburger.ingredients[0]); // Output: "salad"

//Riga 1-5: viene creato un oggetto hamburger con le proprietà name, weight e ingredients in memoria
//Riga 7: viene creato un nuovo oggetto secondHamburger utilizzando l'operatore spread (...), che copia tutte le proprietà di hamburger in un nuovo oggetto
//Riga 8: viene modificato il primo elemento dell'array ingredients di secondHamburger, che è "bun", cambiandolo in "salad". Poiché l'array ingredients è un oggetto mutabile, questa modifica influisce anche sull'array ingredients di hamburger, poiché entrambi gli oggetti condividono lo stesso riferimento all'array in memoria.
//Riga 10: viene stampato il valore del primo elemento dell'array ingredients di hamburger, che è "salad" a causa della modifica fatta tramite secondHamburger
//Riga 11: viene stampato il valore del primo elemento dell'array ingredients di secondHamburger, che è anch'esso "salad" a causa della stessa modifica.


//Code Question 3
/*const hamburger = {
    name: "cheese burger",
    weight: 250,
    maker: {
        name: "Burger King",
        restaurant: {
            name: "Burger King Italia",
            address: "Via Roma 123, Milano",
            isOpen: true,
        },
        age: 50,
    }
};

const secondHamburger = structuredClone(hamburger);
const thirdHamburger = structuredClone(hamburger);
*/





/*L'oggetto iniziale hamburger (3 oggetti):
- oggetto hamburger con le proprietà name, weight e maker
- oggetto marker (all'interno di hamburger) con le proprietà name, restaurant e age
- oggetto restaurant (all'interno di marker) con le proprietà name, address e isOpen

- Esecuzione di structuredClone su hamburger per creare secondHamburger:
- viene creato un nuovo oggetto secondHamburger che è una copia profonda di hamburger, quindi contiene le stesse proprietà e valori, 
  ma è un oggetto completamente separato in memoria.
- Esecuzione di structuredClone su hamburger per creare thirdHamburger:
- viene creato un nuovo oggetto thirdHamburger che è anch'esso una copia profonda di hamburger, quindi contiene le stesse proprietà e valori, 
  ma è un oggetto completamente separato in memoria.
  - Modifiche a secondHamburger o thirdHamburger non influenzeranno hamburger o l'altro oggetto, poiché sono copie profonde e non condividono riferimenti agli stessi oggetti in memoria.
  -Totale oggetti in memoria dopo l'esecuzione del codice: 
   9 (hamburger, maker, restaurant, secondHamburger, secondHamburger.maker, secondHamburger.maker.restaurant, thirdHamburger, thirdHamburger.maker, thirdHamburger.maker.restaurant)
   
*/

/*Code Question 4
const chef = {
    name: "Gordon Ramsay",
    age: 54,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}
/*
const restaurant = {
    name: "Hell's Kitchen",
    address: {
        street: "Main St",
        number: 123,
    },
    openingDate: new Date("2026-04-11"),
    isOpen: false,

};


Commento 1: Modi migliori per clonare l'oggetto chef
Il modo migliore per clonare l'oggetto chef è utilizzare structuredClone(chef),
perché crea una copia profonda che preserva tutte le proprietà, inclusi i metodi (funzioni).
Questo è importante perché chef contiene un metodo makeBurger, che sarebbe perso con JSON.parse(JSON.stringify(chef)).
Inoltre, structuredClone evita riferimenti condivisi, prevenendo modifiche indesiderate all'originale.
*/

/*
Commento 2: Modi migliori per clonare l'oggetto restaurant
Il modo migliore per clonare l'oggetto restaurant è utilizzare structuredClone(restaurant),
poiché crea una copia profonda che gestisce correttamente oggetti annidati come address e tipi speciali come Date (openingDate).
JSON.parse(JSON.stringify(restaurant)) convertirebbe openingDate in una stringa, perdendo la funzionalità di Date.
structuredClone garantisce che la copia sia completamente indipendente, evitando side effects.
*/


/*Code Question 5

const hamburger = {
    name: "cheese burger",
    weight: 250,
    maker: {
        name: "Burger King",
        restaurant: {
            name: "Burger King Italia",
            address: "Via Roma 123, Milano",
            isOpen: true,
        },
        age: 50,
    }
};

const newRestaurant = {...hamburger .maker .restaurant};
newRestaurant.name = "McDonald's Italia";
newRestaurant.address = "Via Milano 456, Roma";
const seondBurger = {...hamburger};
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "McDonald's";

console.log(hamburger . maker .name); // Output: "McDonald's"
console.log(seondBurger . maker .name); // Output: "McDonald's"
console.log(hamburger . maker .restaurant .name); // Output: "McDonald's Italia"
console.log(seondBurger . maker .restaurant .name); // Output: "McDonald's Italia"

totale oggetti in memoria dopo l'esecuzione del codice: 9
 - chefe (1 oggetto)
 - restaurant (1 oggetto)
 -address (1 oggetto)
 -date (1 oggetto)
 -secondBurger (1 oggetto)
 secondrestaurant (1 oggetto)
 -nuovo address (1 oggetto)
-nuovo date (1 oggetto)
-nuovo restaurant (1 oggetto)

-Riga 1-9: viene creato un oggetto hamburger con le proprietà name, weight e maker in memoria. 
maker è un oggetto che contiene a sua volta un oggetto restaurant.
-Riga 11: viene creato un nuovo oggetto newRestaurant utilizzando l'operatore spread (...), 
che copia tutte le proprietà di hamburger.maker.restaurant in un nuovo oggetto.
-Riga 12-13: vengono modificate le proprietà name e address di newRestaurant, 
cambiandole rispettivamente in "McDonald's Italia" e "Via Milano 456, Roma".
-Riga 14: viene creato un nuovo oggetto secondBurger utilizzando l'operatore spread (...),
che copia tutte le proprietà di hamburger in un nuovo oggetto. Tuttavia, poiché hamburger.maker è un oggetto, 
secondBurger.maker punta allo stesso oggetto in memoria di hamburger.maker.
-Riga 15: viene modificata la proprietà restaurant di secondBurger.maker,
cambiandola in newRestaurant. Poiché secondBurger.maker e hamburger.maker condividono lo stesso riferimento,
questa modifica influisce anche su hamburger.maker.restaurant, che ora punta a newRestaurant.
-Riga 16: viene modificata la proprietà name di secondBurger.maker, cambiandola in "McDonald's". 
Poiché secondBurger.maker e hamburger.maker condividono lo stesso riferimento, questa modifica influisce anche su hamburger.maker.name, che ora è "McDonald's".
-Riga 18: viene stampato il valore di hamburger.maker.name, che è "McDonald's" a causa della modifica fatta tramite secondBurger.maker.
-Riga 19: viene stampato il valore di secondBurger.maker.name, che è anch'esso "McDonald's" a causa della stessa modifica.
-Riga 20: viene stampato il valore di hamburger.maker.restaurant.name, che è "McDonald's Italia" a causa della modifica fatta tramite secondBurger.maker.restaurant.
-Riga 21: viene stampato il valore di secondBurger.maker.restaurant.name, che è anch'esso "McDonald's Italia" a causa della stessa modifica.
-In totale, dopo l'esecuzione del codice, ci sono 9 oggetti in memoria: 
hamburger, hamburger.maker, hamburger.maker.restaurant, newRestaurant, secondBurger, secondBurger.maker, secondBurger.maker.restaurant, 
e i due oggetti address e date che sono stati copiati da hamburger.maker.restaurant.
*/

/*Code Question 6
const chef = {
    name: "Gordon Ramsay",
    age: 54,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
    name: "Hell's Kitchen",
    welcomeClient: () => {
        console.log("Benvenuto da Hell's Kitchen!");
    },
    address: {
    street: "Main St",
    number: 123,
    showAddress: () => {
        console.log("L'indirizzo del ristorante è Main St 123");
    }
},
       isOpen: true,
   }
}

/*
Il miglior metodo per clonare l'oggetto chef è utilizzare structuredClone(chef).
Questo perché structuredClone crea una copia profonda dell'oggetto, preservando tutte le proprietà,
inclusi i metodi come makeBurger, welcomeClient e showAddress, che sono funzioni.
A differenza di JSON.parse(JSON.stringify(chef)), che perderebbe tutti i metodi poiché le funzioni non sono serializzabili in JSON,
structuredClone mantiene l'integrità dell'oggetto originale e gestisce correttamente gli oggetti annidati come restaurant e address.
Inoltre, evita riferimenti condivisi, prevenendo modifiche accidentali all'oggetto originale o ai suoi sotto-oggetti.
*/

/*Snack Bonus
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj; // Ritorna il valore primitivo o null
    }

 Crea un nuovo oggetto o array a seconda del tipo di obj
    const clonedObj = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepCopy(obj[key]);
        }
    }
    return clonedObj;
}

Il codice definisce una funzione deepCopy che esegue una copia profonda di un oggetto o array.
- La funzione verifica se l'input obj è null o non è un oggetto (ovvero è un valore primitivo).
 In tal caso, restituisce direttamente il valore, poiché i valori primitivi sono immutabili e non necessitano di copia.
- Se obj è un oggetto o un array, viene creato un nuovo oggetto vuoto (clonedObj) o un array vuoto a seconda del tipo di obj.
- La funzione itera su tutte le proprietà di obj utilizzando un ciclo for...in e verifica se la proprietà è effettivamente una proprietà dell'oggetto (non ereditata) con hasOwnProperty.
- Per ogni proprietà, la funzione chiama ricorsivamente deepCopy su obj[key] per copiare il valore associato a quella proprietà, 
e assegna il risultato a clonedObj[key].
- Infine, la funzione restituisce clonedObj, che è una copia profonda dell'oggetto originale.

test (esempio basato su una possibile "Question 6")

const codeQuestion6 = {
nome: "Esempio",
livelli: [1, 2, {valore: 3}],
saluta: function() {
return `Ciao, sono ${this.nome}`;
}
};
const copiaOggetto = deepCopy(codeQuestion6);

//verifica
copiaOggetto.nome = " Copia Modificata";
console.log("Oggetto originale:", codeQuestion6.saluta()); // Output: "Ciao, sono Esempio"
console.log("Oggetto copiato:", copiaOggetto.saluta()); // Output: "Ciao, sono Copia Modificata"
