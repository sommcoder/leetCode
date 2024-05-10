const textsArr = ["apple pie", "apple tart", "banana pie"];

function jaccardMatch(input, textsArr, threshold) {
  // filter through each string in the array
  // and determine WHICH strings MATCH the "keyword"/input string based on the threshold provided!
  const setA = new Set(input.split(" "));
  // only return the strings that are >= than the threshold
  return textsArr.filter((text) => jaccardSimilarity(setA, text) >= threshold);
}

function jaccardSimilarity(setA, b) {
  const setB = new Set(b.split(" "));
  // checking if the characters in setA are present in setB
  // remember, sets automatically exclude duplicates!

  // return the size of a new set which contains ONLY the elements from setA that are present in setB and divide that by the size of both original two sets to get a
  return (
    new Set([...setA].filter((x) => setB.has(x))).size / (setA.size + setB.size)
  );
}

console.log(jaccardMatch("apple", textsArr, 0.2));
// Output: ['apple pie', 'apple tart']
