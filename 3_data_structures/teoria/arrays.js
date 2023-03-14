// un array puede ser entendido como una lista.
// se declaran utilizando brackets cuadrados.

let names = ["sebastian", "juliana", "camilo"];

// en el array pueden haber cualquier tipo de valores.

let array = ["manzana", 12, true];

// cada elemento del array tiene una posicion, comenzando desde cero.
// a esta position se le llama "index"
// en el array de arriba, el index 0 es 'manzana, el 1 es 12, el 2 es true.

// para acceder a los indices de los arrays, usamos brackets cuadrados tambien

console.log(array[0]); // "manzana"
console.log(array[1]); // 12
console.log(array[2]); // true

// para agregar elementos al array se utiliza el metodo push.

array.push("nuevo");

console.log(array); // ["manzana", 12, true, "nuevo"]

// para ver mas metodos de arrays y como usarlos: https://www.w3schools.com/js/js_array_methods.asp
