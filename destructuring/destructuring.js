// All the different ways to destructure in JS (as of 2024)

// ! ARRAY DESTRUCTURING:
const array = [1, 2, 3, 4, 5, 6];

const [a, b] = array;

console.log("a, b:", a, b);

// skip element syntax:
const [c, , d] = array;

console.log("c, d:", c, d);

// default value:
let aDefault = "x";
const [e = aDefault, f] = array;

console.log("e, f:", e, f);

// rest destructuring:
const [g, h, ...rest] = array;

console.log("g, h, rest:", g, h, rest);

// function/object destructuring (doesn't work without ...)
// would only be useful to extract methods from custom objects
const [i, j, ...{ pop, push }] = array;

console.log("i, j, pop, push:", i, j, pop, push);

// valid but confusing... can just be expressed with:
// [k, l, m, n] instead..?
const [k, l, ...[m, n]] = array;

console.log("k, l, m, n:", k, l, m, n);

// ! Swapping variables
let a3 = 1;
let a2 = 3;

[a2, a3] = [a3, a2];
console.log("a2:", a2, "a3:", a3);

// without destructuring assignment, we would need to declare and assign values to a temporary variable in order to swap values.

// Destructuring with MORE ELEMENTS than the source
// the variables declared with no available corresponding elements will simply return undefined!
const foo = ["one", "two"];

const [red, yellow, green, blue] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // undefined
console.log(blue); // undefined

// ! OBJECT DESTRUCTURING:
let obj = {
  overhead: "321.12",
  price: "784",
  height: 12,
  width: 1,
  process: true,
};
const { o, p } = obj;

// destructure and assign to new variables:
const { a: a1, b: b1 } = obj;

// Rest destructuring objects:
// capture specific properties and the rest into another object
const { overhead, price, ...rest1 } = obj;
console.log("overhead:", overhead, "price:", price, "rest1:", rest1);

const person = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  rest: [],
};

// dynamic key destructuring
let key = "email"; // Assume this key is dynamically determined at runtime
const { [key]: u } = person;
console.log(u); // Outputs: john.doe@example.com

// let a, b, a1, b1, c, d, rest, pop, push;

// Destructuring with variables already declared.
// parentheses are required around assignment statements when using object literal destructuring assignment without a declaration
// ({ a, b } = obj);
// ({ a: a1, b: b1 } = obj);
// ({ a: a1 = aDefault, b = bDefault } = obj);
// ({ a, b, ...rest } = obj);
// ({ a: a1, b: b1, ...rest } = obj);
