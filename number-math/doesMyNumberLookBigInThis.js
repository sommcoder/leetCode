function narcissistic(value) {
  // Code me to return true or false
  // edge case, 1 digit number x^1 = x;
  let pow = value.length;
  return (
    +value
      .toString()
      .split("")
      .map((el) => {
        console.log("el:", el);
        console.log("el ^ pow:", el ^ pow);
        return el ^ pow;
      })
      .join("") == value
  );
}
console.log(narcissistic(153));
console.log(narcissistic(370));
console.log(narcissistic(2));
console.log(narcissistic(1741725));
console.log(narcissistic(123));
console.log(narcissistic(8208));
console.log(narcissistic(98462));
