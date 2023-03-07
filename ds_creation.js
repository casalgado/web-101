let events = [
  "dinner",
  "movies",
  "bar",
  "concert",
  "dancing",
  "travel",
  "party",
  "club",
];

let journal = [];
for (let i = 0; i < 100; i++) {
  let event = events[Math.floor(Math.random() * events.length)];
  let amount = Math.floor(Math.random() * 160) + 40;
  let weekend = Math.random() > 0.7;
  console.log(event);
  console.log(amount);
  console.log(weekend);
  journal.push({ event: event, amount: amount, weekend: weekend });
}

console.log(journal);
