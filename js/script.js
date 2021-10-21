/*

1.chiedi all'utente quanti km vuole percorrere
2.chiedi all'utente la sua età
3.prezzo del biglietto definito in base ai km (0.21 € al km)
4.applicare lo sconto del 20% ai minorenni
5.applicare lo sconto del 40% agli over 65
6.output del prezzo finale con massimo due decimali

*/

const kmToTrip = parseInt(prompt ("Quanti chilometri vorresti percorrere?"));
const userAge = parseInt(prompt ("Quanti anni hai?"));
let ticketPrice = kmToTrip * 0.21;
let finalPrice;

if (userAge <= 18){
  ticketPrice = ticketPrice * 80 / 100;
} else if (userAge >= 65){
  ticketPrice = ticketPrice * 60 / 100;
} else {
  console.log("Nessuno sconto");
}

console.log(ticketPrice);

ticketPrice = ticketPrice.toFixed(2);

document.getElementById("output").innerHTML = 
`
  Chilometri: ${kmToTrip} <br>
  Età viaggiatore: ${userAge} <br>
  Costo biglietto: ${kmToTrip} * 0.21 = ${ticketPrice}€ <br>

`;