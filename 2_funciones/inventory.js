function zeroPad(number, size) {
  let string = String(number);
  while (string.length < size) {
    string = "0" + string;
  }
  return string;
}

function formatInventory(cows, chicken, dogs) {
  console.log(`${zeroPad(cows, 3)} cows`);
  console.log(`${zeroPad(chicken, 3)} chicken`);
  console.log(`${zeroPad(dogs, 3)} dogs`);
}

console.log("Juliana"[2]);
