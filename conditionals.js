let number = 20;

if (number == 20) {
  console.log("number is 20");
}

let string = "cada palabra esta separada por un espacio";

let numbers = [5, 13, 8, 2, 4, 6];

// for (let i = 1; i <= 9; i++) {
//   for (let j = i + 1; j <= 9; j++) {
//     console.log(i, j);
//   }
// }

let ids = [5, 6, 8, 2, 4, 6, 9, 9, 212];

console.log(ids.length);
let result = true;
let count = 0;
for (i = 0; i < ids.length; i++) {
  for (j = i + 1; j < ids.length; j++) {
    console.log(ids[i], ids[j]);
    count++;
    if (ids[i] == ids[j]) {
      result = false;
      break;
    }
  }
  if (!result) {
    break;
  }
}

console.log(result, count);
