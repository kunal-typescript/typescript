/**
 * When to use annotations?
 */

//1. Function that returns the 'any' type.(Fixing the any type)
const json = '{"x": 10, "y": 20}';
//JSON.parse return any, hence we can't predict what is stored inside coOrdinates variable.
const coOrdinates = JSON.parse(json);
console.log(coOrdinates.absent); //It will not throw the error.

//Hence we have to use the type annotation here.
const validCoOrdinates: {
  x: number;
  y: number;
} = JSON.parse(json);
// console.log(validCoOrdinates.absent); // Now it will throw the error.

//2. When we declare a variable n one line and initialize it later.(Delayed initialization)
let age: number;
age = 10;

const colors = ["red", "green", "blue"];
let foundColor: boolean;

for (let i = 0; i < colors.length; i++) {
  if (colors[i] === "blue") {
    foundColor = true;
  }
}

//3. Variable whose type cannot be inferred correctly.(When inference doesn't work)
const numbers = [-10, -1, 7];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
