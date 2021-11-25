/**
 * @description
 * Type Inference => Typescript tries to figure out,
 * what type of value a variable will refer to.
 * If the declaration and initialization are on the same line,
 * typescript will figure out the type of variable for us.
 */

/**
 * Inference with variables
 */
const height = 5;
let age = 30;
// age = "thirty"; Type 'string' is not assignable to type 'number'.

const speed = "fast";
const hasName = true;
const nothingNull = null;
const nothingUndefined = undefined;

// build in objects
const myDOB = new Date();

/**
 * Inference with object type
 */

//1.Array =>
const colors = ["red", "green"];
const ageGroup = [20, 30, 40];
const truths = [true, false];

//2.Classes =>
class Car {}
const car = new Car();

//3.Object literal =>
let point = {
  x: 10,
  y: 10,
};

//4.Function
const logNumber = (no: number) => {
  console.log(no);
};
