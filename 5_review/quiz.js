const employee_data = require("./data");

function listNames(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(`${element.first_name}, ${element.last_name}`);
  }
}

let example_employee = {
  personal_id: "21-542-3562",
  first_name: "Dosi",
  last_name: "Gateman",
  email: "dgateman2q@networksolutions.com",
  gender: "Female",
  latitude: 40.5931238,
  longitude: 43.7385844,
  birthdate: "2005-12-25",
  balance: 2746419,
  job_title: "Legal Assistant",
};

let other_employee = {
  name: "beto",
  balance: 15121321,
};

// to solve these, use filter(), map()

console.log(namesOfEmployeesWithMoreThan(9980000));

function namesOfEmployeesWithMoreThan(amount) {
  // return the names of employees with more than an amount balance
  return employee_data
    .filter((e) => e.balance > amount)
    .map((e) => `${e.first_name} ${e.last_name}`);
}

function listTopTenRichesJobs() {
  // output an array of the job titles of the ten richest employees
  // hint (has to use array sort)
}

function averageBalanceByGender() {
  // a function that recieves a gender and outputs the average balance in accounts of that gender.
}

function namesOfEmployeesInSouthAmerica() {
  // outputs an array of names of employees in south america
}

function employeesInDateRange() {
  // a function that takes in two years and returns employees that were born between those years
}

function employeesOfAge() {
  // a function that takes a number and returns employees of that age
}
