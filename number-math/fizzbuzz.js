/*
if a number between 1-100 is..
divisible by 3, print Fizz
divisible by 5, print Buzz
divisible by 7, print Bazz
*/

for (let i = 1; i < 100; i++) {
  let output = "";
  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";
  if (i % 7 === 0) output += "Bazz";
  console.log(output || i);
}
