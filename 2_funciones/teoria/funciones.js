// Intro

// las funciones son bloques de codigo que pueden ser reutilizados en una aplicacion.
// cada funcion tiene inputs y outputs.
// los inputs son llamados "argumentos"/"argumentn"
// el output es el return value de la funcion.

// Declarar funciones

function nombre_de_la_funcion(argumento1, argumento2) {
  console.log("aqui va el codigo de la funcion");
  return "aqui va el return value";
}

// la funcion de arriba se llama: nombre_de_la_funcion
// tiene dos argumentos: argumento1 y argumento2
// esta funcion return el string "aqui va el return value"

// Ejemplos

// Una funcion que recibe dos numeros y devuelve la suma

function add(num1, num2) {
  return num1 + num2;
}

// Una funcion que recibe un string (nombre), y devuelve un saludo.

function greet(name) {
  return `Hello ${name}, nice to meet you!`;
}
