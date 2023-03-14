// los objetos/objects en javascript son grupos de key/value pairs.
// se declaran utilizando curly brackets

let person = {
  name: "alejandro",
  age: 36,
  human: true,
};

console.log(person); // { name: "alejandro", age: 36, human: true}

// el objeto arriba tiene tres keys: name, age, human
// a estas keys tambien se le llaman properties
// cada key esta asociada a un value

// Leer Valores (Read)

// para acceder a los values de las keys de un objeto hay dos maneras.
// la primera es usando dot notation

console.log(person.name); // "alejandro"

// la segunda es usando brackets cuadrados

console.log(person["name"]); // "alejandro"

// Escribir Valores (Write)

// Para agregar propiedades al objecto, se utiliza una notacion similar que al leer
// la diferencia en que se agrega un "="" y el valor que se le asigna a la propiedad.

person.color = "blue";

console.log(person); // { name: "alejandro", age: 36, human: true, color: "blue"}

// Para modificar valores se utiliza la misma notacion.

person.age = 25;

console.log(person); // { name: "alejandro", age: 25, human: true, color: "blue"}

// y tambien funciona con brackets cuadrados

person["age"] = 55;

console.log(person); // { name: "alejandro", age: 55, human: true, color: "blue"}

// para eliminar la propiedad de un objeto se utiliza delete

delete person.color;

console.log(person); // { name: "alejandro", age: 55, human: true}

// Iteracion (Iteration)

// Para iterar por las propiedades o valores del objeto, se deben convertir en arrays.
// Aqui hay tres opciones.

// 1. Array de las propiedades/properties/keys del objeto.

let array_of_keys = Object.keys(person);
console.log(array_of_keys); // [ 'name', 'age', 'human' ]

// 2. Array de los values del objeto

let array_of_values = Object.values(person);
console.log(array_of_values); // [ 'alejandro', 55, true ]

// 3. Array de los key/value pairs.
// el resultado es un array de arrays.

let array_of_pairs = Object.entries(person);
console.log(array_of_pairs); // [ [ 'name', 'alejandro' ], [ 'age', 55 ], [ 'human', true ] ]

// para saber mas que se puede hacer con objetos, explorar: https://www.w3schools.com/js/js_object_definition.asp
