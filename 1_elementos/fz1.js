function greet(name, age) {
  let output = `Hello ${name}. You are ${age} years old`;
  console.log(output);
}

function square(number) {
  console.log(number * number);
}

function isEven(number) {
  console.log(number % 2 == 0);
}

// this function is a new version of greet
const limitTest = function (number) {
  while (number < 10) {
    number = number + 1;
    console.log("Limit", number);
  }
};

greet("beto", 5);

// function formatCurrency(number){}

// 1000 -> '$1,000'
// 45780 -> '$45,780'
// 10000000 -> '$10,000,000'
