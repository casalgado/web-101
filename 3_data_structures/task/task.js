const log = [
  { activity: "restaurants", price: 102, weekend: false },
  { activity: "travel", price: 103, weekend: false },
  { activity: "coffeeshop", price: 66, weekend: false },
  { activity: "restaurants", price: 126, weekend: true },
  { activity: "coffeeshop", price: 138, weekend: false },
  { activity: "restaurants", price: 98, weekend: false },
  { activity: "travel", price: 139, weekend: false },
  { activity: "travel", price: 52, weekend: true },
  { activity: "travel", price: 133, weekend: true },
  { activity: "travel", price: 141, weekend: false },
  { activity: "party", price: 77, weekend: false },
  { activity: "coffeeshop", price: 71, weekend: false },
  { activity: "museums", price: 122, weekend: false },
  { activity: "concert", price: 102, weekend: true },
  { activity: "party", price: 92, weekend: true },
  { activity: "party", price: 51, weekend: false },
  { activity: "concert", price: 46, weekend: false },
  { activity: "restaurants", price: 67, weekend: false },
  { activity: "travel", price: 156, weekend: false },
  { activity: "museums", price: 83, weekend: false },
  { activity: "travel", price: 81, weekend: false },
  { activity: "museums", price: 46, weekend: true },
  { activity: "restaurants", price: 59, weekend: true },
  { activity: "concert", price: 114, weekend: false },
  { activity: "travel", price: 93, weekend: false },
  { activity: "travel", price: 70, weekend: false },
  { activity: "party", price: 138, weekend: false },
  { activity: "travel", price: 154, weekend: false },
  { activity: "coffeeshop", price: 46, weekend: true },
  { activity: "restaurants", price: 80, weekend: false },
  { activity: "museums", price: 52, weekend: false },
  { activity: "concert", price: 155, weekend: false },
  { activity: "travel", price: 68, weekend: false },
  { activity: "museums", price: 125, weekend: false },
  { activity: "restaurants", price: 116, weekend: false },
  { activity: "museums", price: 115, weekend: false },
  { activity: "concert", price: 43, weekend: false },
  { activity: "party", price: 108, weekend: false },
  { activity: "restaurants", price: 57, weekend: false },
  { activity: "concert", price: 155, weekend: true },
  { activity: "party", price: 40, weekend: false },
  { activity: "museums", price: 150, weekend: false },
  { activity: "party", price: 129, weekend: false },
  { activity: "coffeeshop", price: 90, weekend: false },
  { activity: "coffeeshop", price: 54, weekend: false },
  { activity: "party", price: 143, weekend: true },
  { activity: "travel", price: 132, weekend: true },
  { activity: "concert", price: 115, weekend: false },
  { activity: "museums", price: 138, weekend: false },
  { activity: "concert", price: 142, weekend: true },
  { activity: "restaurants", price: 127, weekend: true },
  { activity: "coffeeshop", price: 115, weekend: true },
  { activity: "museums", price: 156, weekend: true },
  { activity: "concert", price: 117, weekend: true },
  { activity: "museums", price: 133, weekend: false },
  { activity: "museums", price: 129, weekend: false },
  { activity: "concert", price: 84, weekend: true },
  { activity: "museums", price: 79, weekend: false },
  { activity: "party", price: 119, weekend: false },
  { activity: "coffeeshop", price: 103, weekend: false },
  { activity: "party", price: 139, weekend: true },
  { activity: "party", price: 144, weekend: false },
  { activity: "restaurants", price: 99, weekend: false },
  { activity: "restaurants", price: 42, weekend: false },
  { activity: "concert", price: 109, weekend: false },
  { activity: "museums", price: 94, weekend: false },
  { activity: "museums", price: 71, weekend: true },
  { activity: "restaurants", price: 87, weekend: false },
  { activity: "museums", price: 91, weekend: true },
  { activity: "party", price: 63, weekend: true },
  { activity: "coffeeshop", price: 133, weekend: false },
  { activity: "restaurants", price: 97, weekend: false },
  { activity: "concert", price: 57, weekend: true },
  { activity: "coffeeshop", price: 68, weekend: false },
  { activity: "museums", price: 118, weekend: false },
  { activity: "party", price: 65, weekend: false },
  { activity: "concert", price: 87, weekend: false },
  { activity: "travel", price: 93, weekend: false },
  { activity: "concert", price: 58, weekend: false },
  { activity: "concert", price: 134, weekend: false },
  { activity: "museums", price: 42, weekend: false },
  { activity: "restaurants", price: 141, weekend: false },
  { activity: "museums", price: 143, weekend: false },
  { activity: "coffeeshop", price: 93, weekend: true },
  { activity: "coffeeshop", price: 148, weekend: false },
  { activity: "coffeeshop", price: 155, weekend: true },
  { activity: "museums", price: 83, weekend: false },
  { activity: "concert", price: 43, weekend: false },
  { activity: "travel", price: 56, weekend: false },
  { activity: "museums", price: 137, weekend: false },
  { activity: "museums", price: 55, weekend: false },
  { activity: "museums", price: 132, weekend: false },
  { activity: "party", price: 65, weekend: true },
  { activity: "travel", price: 127, weekend: true },
  { activity: "museums", price: 79, weekend: false },
  { activity: "museums", price: 113, weekend: true },
  { activity: "coffeeshop", price: 130, weekend: true },
  { activity: "travel", price: 121, weekend: false },
  { activity: "museums", price: 98, weekend: true },
  { activity: "concert", price: 44, weekend: false },
];

const allActivities = [
  "museums",
  "concert",
  "restaurants",
  "coffeeshop",
  "travel",
  "party",
];

let one = "cual fue la actividad que mas gasto plata los fines de semana?";
let two = "cual fue la actividad que menos gasto plata los dias de semana?";
let three = "promedio de gasto fines de semana";
let four =
  "promedio de gastos fines de semana en restaurantes vs restaurantes en dias de semana";

function averageExpensesWeekend(log) {
  let total = 0;
  let count = 0;
  for (let i = 0; i < log.length; i++) {
    const entry = log[i];
    if (entry.weekend) {
      total += entry.price;
      count += 1;
    }
  }
  return total / count;
}

console.log(averageExpensesWeekend(log));

function averageExpenseByActivity(log, activity, isWeekend) {}

function totalByActivity(log, activity) {
  let total = 0;
  for (let i = 0; i < log.length; i++) {
    const entry = log[i];
    if (entry.activity == activity) {
      total += entry.price;
    }
  }
  return total;
}

function totalByActivityOnWeekends(log, activity) {
  let total = 0;
  for (let i = 0; i < log.length; i++) {
    const entry = log[i];
    if (entry.activity == activity && entry.weekend) {
      total += entry.price;
    }
  }
  return total;
}

function totalByActivityOnWeekdays(log, activity) {
  let total = 0;
  for (let i = 0; i < log.length; i++) {
    const entry = log[i];
    if (entry.activity == activity && !entry.weekend) {
      total += entry.price;
    }
  }
  return total;
}

function mostExpensiveActivityOnWeekends(log, allActivities) {
  let totals = [];
  for (let i = 0; i < allActivities.length; i++) {
    const activity = allActivities[i];
    totals.push(totalByActivityOnWeekends(log, activity));
  }
  let maxExpense = Math.max(...totals);
  let position = totals.indexOf(maxExpense);
  let mostExpensiveActivity = allActivities[position];
  return `Activity: ${mostExpensiveActivity}, Amount: ${maxExpense}`;
}

function leastExpensiveActivityOnWeekdays(log, allActivities) {
  let totals = [];
  for (let i = 0; i < allActivities.length; i++) {
    const activity = allActivities[i];
    totals.push(totalByActivityOnWeekdays(log, activity));
  }
  let minExpense = Math.min(...totals);
  let position = totals.indexOf(minExpense);
  let leastExpensiveActivity = allActivities[position];
  return `Activity: ${leastExpensiveActivity}, Amount: ${minExpense}`;
}

console.log(totalByActivity(log, "museums"));

const totals = {
  museums: 2584,
  concert: 458,
  restaurants: 871,
  coffeeshop: 123,
  travel: 124,
  party: 124,
};

let min = 123;

function returnMinValues(totals, min) {
  let arrayOfKeyValuePairs = Object.entries(totals);
  let activites = [];
  for (let i = 0; i < arrayOfKeyValuePairs.length; i++) {
    const pair = arrayOfKeyValuePairs[i];
    if (pair[1] == min) {
      activites.push(pair[0]);
    }
  }
  let more = activites.length > 1;
  return `The activit${more ? "ies" : "y"} ${
    more ? "are" : "is"
  } ${activites} with a value of ${min}`;
}

console.log(returnMinValues(totals, min));
