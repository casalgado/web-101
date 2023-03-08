for (let i = 1; i <= 100; i++) {
  let response = "";
  if (i % 3 == 0) {
    response += "fizz";
  }
  if (i % 5 == 0) {
    response += "buzz";
  }
  if (response == "") {
    response = i;
  }
  console.log(response);
}
