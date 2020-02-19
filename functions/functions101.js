// Function - input, code, output

let greetUser = function() {
  console.log("Welcome user");
};

greetUser();

// Squaring function
let square = function(num) {
  let result = num * num;
  return result;
};

// The Squaring function doesn't do anything on its own. Much store the 'result' in a variable then log that variable to see it:
let valueOfThree = square(3);
let valueOfTen = square(10);
console.log(valueOfTen);
console.log(valueOfThree);

// Challenge: Farenheit to Celsius converter
let convertFToC = function(f) {
  let celsius = ((f - 32) * 5) / 9;
  return celsius;
};

let tempOne = convertFToC(32);
let tempTwo = convertFToC(68);

console.log(tempOne);
console.log(tempTwo);
