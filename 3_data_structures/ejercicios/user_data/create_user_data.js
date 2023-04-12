let cities = [
  "paris",
  "new york",
  "london",
  "barranquilla",
  "buenos aires",
  "beijing",
];

let prefered_activity = [
  "museum",
  "party",
  "business",
  "concert",
  "gardens",
  "movies",
  "zoo",
  "restaurants",
];
let sunny; // deberia ser true / false
let tourists_per_day; // un numero entre 500 y 1000
let avg_tourist_spending; // un numero entre 50 y 200

// para sacar un numero entre 50 y 100, se hace Math.floor((Math.random() * 50) + 50)

random_number_between_0_and_5 = Math.floor(Math.random() * 6);

console.log(cities[random_number_between_0_and_5]);

/* crear un array que dentro tenga objetos de la siguiente forma: 

{
    city: string,
    activity: string,
    sunny: boolean'
    tourists_per_day: number,
    avg_tourist_spending: number,
}


luego que tengan el array se pueden crear filtros o maps de acuerdo a los insights de data que se requieran

*/
