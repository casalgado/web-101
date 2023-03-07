// Las loops se utilizan para correr un bloque de codigo muchas veces.

// for loop.
// las loops mas comunes. se declaran utilizando la palabra for.
// dentro de los parentesis se configura el loop.
// primero se declara una variable i que es la variable de iteracion.
// luego se establece una condicion, el loop correra siempre y cuando esta condicion sea cierta.
// finalmete se le suma 1 a la variable de iteracion.

for (let i = 0; i < 100; i++) {
  console.log(i);
}

// la loop arriba escribe los numeros de 0 a 99

// while loop
// similar al for loop (y menos utilizada)
// el while loop se crea a partir de una condicion y correra hasta que la condicion sea falsa.
// no se declara con variable de iteracion.

let condition = true;

while (condition) {
  console.log("corre este bloque de codigo");
}
