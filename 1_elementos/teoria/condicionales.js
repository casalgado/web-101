// los condicionales se utilizan para tomar decisiones dentro del programa.
// las decisiones se toman basadas en expresiones que son verdaderas o falsas.

// if:
// es el condicional mas basico

let condition = true;

if (condition) {
  console.log("corre este bloque de codigo");
}

/*
vocabulario:
 lo que esta dentro de parentesis redondos () se llama la condicion.
 lo que esta dentro de parentesis curvos {} se llama un bloque de codigo.
 el bloque de codigo {} solo corre si la condicion () es verdadera.
*/

// if / else
// El if/else es similar al if pero tiene dos bloques en vez de uno.
// Si la condicion es cierta, corre el bloque uno, si es falsa, corre el bloque dos.

if (condition) {
  console.log("bloque uno");
} else {
  console.log("bloque dos");
}

// if, else if, else
// tambien existe la posibilidad de agregar una segunda condicion, se llama else if.
// el flujo es el siguiente
// si first_condition es true, corre el bloque uno, si es false, pregunta second_condition
// si second_condition es true, corre el bloque dos, si es false, corre el bloque else.
// se pueden agregar cuantos else if sean necesarios.

let first_condition = true;
let second_condition = true;

if (first_condition) {
  console.log("bloque uno");
} else if (second_condition) {
  console.log("bloque dos");
} else {
  console.log("bloque tres");
}
