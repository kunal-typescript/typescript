/**
 * @description
 * Type Annotation => Code we add to tell Typescript,
 * what type of value a variable will refer to.
 */

/**
 * Annotation with variables
 */
const height: number = 5;
let age: number = 30;
// age = "thirty"; Error, cannot assign string type to number type.

const speed: string = "fast";
const hasName: boolean = true;
const nothingNull: null = null;
const nothingUndefined: undefined = undefined;

// build in objects
const myDOB: Date = new Date();

/**
 * Annotation with object type
 */

//1.Array =>
const colors: string[] = ["red", "green"];
const ageGroup: number[] = [20, 30, 40];
const truths: boolean[] = [true, false];

//2.Classes =>
class Car {}
const car: Car = new Car();

//3.Object literal =>
let point: {
  x: number;
  y: number;
} = {
  x: 10,
  y: 10,
};

//4.Function
const logNumber: (no: number) => void = (no: number) => {
  console.log(no);
};
