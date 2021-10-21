/*

1.chiedi all'utente quanti km vuole percorrere
2.chiedi all'utente la sua età
3.applicare lo sconto del 20% ai minorenni
4.applicare lo sconto del 40% agli over 65
5.output del prezzo finale con massimo due decimali

*/

const kmToTrip = parseInt(prompt ("Quanti chilometri vorresti percorrere?"));
const userAge = parseInt(prompt ("Quanti anni hai?"));
const ticketPrice = kmToTrip * 0.21;