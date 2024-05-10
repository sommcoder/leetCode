// Sets are native with JS as of 2015 = ES6

// ?How to implement?

// ! automatic exclusion of duplicates:
const arrayWithDuplicates = ["apple", "banana", "apple", "orange", "banana"];
const uniqueSet = new Set(arrayWithDuplicates);
console.log(uniqueSet);
// Output: Set(3) { 'apple', 'banana', 'orange' }

// ! convert set to Array:
const myArray = [...mySet];
// * or
const myArray1 = Array.from(mySet);

// ! appending to set:
// returns the new modified set.
mySet.add(1);
