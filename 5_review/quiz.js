const employee_data = require("./data");

function listNames(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(`${element.first_name}, ${element.last_name}`);
  }
}

listNames(employee_data);

function averageBalanceByGender() {
  // a function that recieves a gender and outputs the average balance in accounts of that gender.
}

function listTopTenRichesJobs() {
  // output an array of the job titles of the ten richest employees
  // hint (has to use array sort)
}

function namesOfEmployeesInSouthAmerica() {
  // outputs an array of names of employees in south america
}

function employeesInDateRange() {
  // a function that takes in two dates and returns employees that were born between those dates
}

function employeesOfAge() {
  // a function that takes a number and returns employees of that age
}
