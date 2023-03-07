let _name = "en el browser";
console.log(_name);

function add(num1, num2) {
  return num1 + num2;
}

let string = "soy un texto";
let integer = 45;
let array = ["texto", 45, "texto"];
let object = { nombre: "beto", edad: 35 };

console.log();

function addExlamationPoint(string) {
  console.log(string + "!");
}

addExlamationPoint("Hola");

let user = {
  name: "beto",
  age: 36,
  education: {
    bachelors: "norte",
    masters: "erasmus",
    doctorate: null,
  },
};

let user2 = {
  name: "sebas",
  age: 33,
  education: {
    bachelors: "andes",
    masters: "northeastern",
    doctorate: null,
  },
};

let users = [user, user2];

console.log(users.find((u) => u.name == "esteban"));

function daysSinceBirth(day, month, year) {
  if (year <= 1980) {
    return "you are OLD!";
  } else {
    return "you are such a baby";
  }
}

console.log(daysSinceBirth(2, 12, 1976));
