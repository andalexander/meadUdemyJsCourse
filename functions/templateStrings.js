// Template strings

let getScoreText = function(name = "Anonymous", score = 0) {
  return `Name: ${name} - Score: ${score}`;
};

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

// Challenege area
// total, tipPercent .2

let getTip = function(total, tipPercent = 0.2) {
  let percent = tipPercent * 100;
  let tip = total * tipPercent;
  return `A ${tipPercent}% tip on $${total} would be $${tip}`;
};

let totalBill = getTip(60);
console.log(totalBill);

let name = "Andrew";
let age = 32;
console.log(`Hey, my name is ${name}, i am ${age} years old`);
