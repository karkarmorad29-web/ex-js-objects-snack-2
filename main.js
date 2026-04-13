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
const hamburger = {
    name: "cheese burger",
    weight: 250,
    maker: {
        name: "Burger King",
        restaurant: {
            name: "Burger King Italia",
            address: "Via Roma 123, Milano"
            isOpen: true,
        },
        age: 50,
    }
};

const secondHamburger = structuredClone(hamburger);
const thirdHamburger = structuredClone(hamburger);

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